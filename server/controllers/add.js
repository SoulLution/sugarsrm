var mysql = require('mysql2');
var config = require('../config/config');
var con = mysql.createConnection(config.db);

const qrGenerator = require('@sylvainneung/qr-code-generator');

exports.addGroupStudent = async req => {
	if(!req.body.student) return { status: 202, msg: 'No student' }
	if(!req.body.group) return { status: 202, msg: 'No group' }

	let student = await con.promise().query(`SELECT * FROM student_by_group 
																					WHERE student_id = ?
																					AND group_id = ?`, [req.body.student,req.body.group])

	if(student[0].length) return { status: 204, msg: 'Student in a group' }

	let empty = await con.promise().query(`INSERT INTO student_by_group(student_id, group_id)
																						VALUES(?,?)`, [req.body.student,req.body.group])

	return { status: 200, student: empty[0].insertId}
}

exports.removeGroupStudent = async req => {
	if(!req.body.student) return { status: 202, msg: 'No student' }

	let empty = await con.promise().query(`DELETE FROM student_by_group 
																				 WHERE id = ?`, [req.body.student])

	return { status: 200 }
}

exports.getHash = async req => {
	let my_id = req.cookies['SIT'] || 1;

	let hash = await bcrypt.hashSync({ teacher: my_id, lesson: req.body.lesson }, 10);

	qrGenerator.generateQrImage("http://localhost:9003/qr/"+hash, 'teacher_' + my_id + '-lesson_' +req.body.lesson, "svg", "../../assets/qrcode/");

	let result = await con.promise().query(`UPDATE lesson 
																				SET hash = hash
																				WHERE id = ?
																				`,[hash,req.body.lesson])

	return { status: 200, path: 'teacher_' + my_id + '-lesson_' +req.body.lesson}
}

exports.setHash = async req => {

	let my_id = req.cookies['SIS'];

	let lesson = await con.promise().query(`SELECT id FROM lesson 
																					WHERE hash = ?
																					`, [req.body.hash])

	lesson = lesson[0][0]
	let empty = await con.promise().query(`INSERT INTO activity(student_id, lesson)
																						VALUES(?,?)`, [my_id,lesson.id])

	return { status: 200, lesson: empty[0].insertId}
}