var mysql = require('mysql2');
var config = require('../config/config');
var con = mysql.createConnection(config.db);


exports.getMe = async req => {
	if(!req.signedCookies['SIS'] && req.signedCookies['SIT']) return { status: 401, msg: 'Unatohorizeted' }
	let my_id = req.signedCookies['SIS'] || req.signedCookies['SIT'];
	let profile = await con.promise().query(`SELECT * FROM ${req.signedCookies['SIS'] ? 'student' : 'teacher'} WHERE id = ?`, [my_id])
	profile = profile[0]

	return { status: 200, profile}
}
exports.getStudentGrid = async req => {

	return { status: 200 }
}
exports.getStudentSearch = async req => {

	let students = await con.promise().query(`SELECT * FROM student 
																						WHERE email LIKE concat('%', ?, '%')`, [req.body.search, req.body.id])

	students = students[0]

	return { status: 200, students }
}
exports.getLessonGridStudent = async req => {

	return { status: 200 }
}
exports.getLessonGridTeacher = async req => {

	return { status: 200 }
}
exports.getLesson = async req => {

	return { status: 200 }
}
exports.getGroupList = async req => {
	console.log(req.signedCookies['sit'])
	// if(!req.cookies['SIT']) return { status: 401, msg: 'Unatohorizeted' }
	let my_id = req.cookies['SIT'] || 1;
	
	let groups = await con.promise().query(`SELECT * FROM diplom.group g 
																					WHERE teacher_id = ?`, [my_id])
	groups = groups[0]

	for(let i = 0; i < groups.length; i++){
		groups[i].students =  await con.promise().query(`SELECT s.id, s.name, s.lastname, s.patronymic, s.email FROM student_by_group sbg
																											JOIN student s ON s.id = sbg.student_id
																											WHERE sbg.group_id = ?
																											`, [groups[i].id])
		groups[i].students = groups[i].students[0]
	}


	return { status: 200, groups }
}
exports.getGroup = async req => {
	
	if(!req.body.id) return { status: 202, msg: 'No id' }

	let group = await con.promise().query(`SELECT * FROM diplom.group g 
																					WHERE id = ?`, [req.body.id])
	group = group[0][0]

	group.students =  await con.promise().query(`SELECT sbg.id, s.name, s.lastname, s.patronymic, s.email FROM student_by_group sbg
																											JOIN student s ON s.id = sbg.student_id
																											WHERE sbg.group_id = ?
																											`, [group.id])
	group.students = group.students[0]

	return { status: 200, group }
}








