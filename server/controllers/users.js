var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var mysql = require('mysql2');
var config = require('../config/config');
var con = mysql.createConnection(config.db);

exports.signin = async req => {
	if(!req.body.login) 		return { status: 402, msg: 'No Login'}
	if(!req.body.password) 	return { status: 402, msg: 'No Password'}

	let cook = 'SIS'
	let user = await con.promise().query(`SELECT * FROM student WHERE email = ?`, [req.body.login]);
	
	if (!user[0].length){
		user = await con.promise().query(`SELECT * FROM teacher WHERE email = ?`, [req.body.login]);
		cook = 'SIT'
	}

	if (!user[0].length) return { status: 401, msg: 'Not AUTH!' }
	
	user = user[0][0];

	if (!bcrypt.compareSync(req.body.password, user.password)) return { status: 401, msg: 'Not AUTH!' }

	const payload = {
		id: user.id,
	}
	let token = jwt.sign(payload, config.jwtSecret, {expiresIn: 144000	});

	return { status: 200, token, cook }
}

exports.signup = async req => {
	if(!req.body.login) 		return { status: 402, msg: 'No Login'}
	if(!req.body.password) 	return { status: 402, msg: 'No Password'}

	let hash = await bcrypt.hashSync(req.body.password, 10);

	let insert = await con.promise().query(`INSERT INTO student (email, password) VALUES (?, ?)`, [req.body.login, hash]);


	return { status: 200 }
}