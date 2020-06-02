var users = require('../controllers/users');

module.exports = async (req, res) => {

	if(!req.body.method) 
		return res.status(405).json({message: 'no method'})

	let response = { status: 405, message: 'invalid method' }
	
	try {
		switch(req.body.method.toLowerCase()) {
			case 'signin': 			response = await users.signin(req); 			break
			case 'signup': 			response = await users.signup(req);		 			break
		}

		res.cookie(response.cook, response.token, { maxAge: 900000, httpOnly: false }).status(response.status).json(response)
	} catch (err) {

		res.status(500).send('Server error :(')
		console.error(err)

	}
}