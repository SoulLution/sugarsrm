var mysql = require('mysql2');
var config = require('../config/config');
var con = mysql.createConnection(config.db);


exports.updateMe = async req => {

	return { status: 200 }
}
exports.updateAva = async req => {

	return { status: 200 }
}
exports.updateLesson = async req => {
	console.log(req.body)
	let result
	if(!req.body.id)
		result = await con.promise().query(`INSERT INTO lesson (lesson_name, group_id, date) VALUES (?,?,?)`,[req.body.name,req.body.group,req.body.date])
	else
		result = await con.promise().query(`UPDATE lesson 
																				SET lesson_name = ?,
																						group_id = ?,
																						date = ?
																				WHERE id = ?
																				`,[req.body.name,req.body.group,req.body.date,req.body.id])
	console.log(result)

	return { status: 200 }
}
exports.updateGroup = async req => {

	return { status: 200 }
}
exports.updateActivity = async req => {

	return { status: 200 }
}
exports.updateDispureActivity = async req => {

	return { status: 200 }
}





