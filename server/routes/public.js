var gets = require('../controllers/gets');
var updates = require('../controllers/updates');
var add = require('../controllers/add');

module.exports = async (req, res) => {

	if(!req.body.method) 
		return res.status(405).json({message: 'no method'})

	let response = { status: 405, message: 'invalid method' }
	
	try {
		switch(req.body.method.toLowerCase()) {
			case 'get-me': 									response = await gets.getMe(req);		 									break
			case 'get-student-grid': 				response = await gets.getStudentGrid(req);		 				break
			case 'get-student-search': 			response = await gets.getStudentSearch(req);		 			break
			case 'get-lesson-grid-student': response = await gets.getLessonGridStudent(req); 			break
			case 'get-lesson-grid-teacher': response = await gets.getLessonGridTeacher(req); 			break
			case 'get-lesson': 							response = await gets.getLesson(req); 								break
			case 'get-group-list': 					response = await gets.getGroupList(req); 							break
			case 'get-group': 							response = await gets.getGroup(req); 									break

			case 'update-me': 							response = await updates.updateMe(req); 							break
			case 'update-ava': 							response = await updates.updateAva(req); 							break
			case 'update-lesson': 					response = await updates.updateLesson(req); 					break
			case 'update-group': 						response = await updates.updateGroup(req); 						break
			case 'update-activity': 				response = await updates.updateActivity(req); 				break
			case 'update-dispure-activity': response = await updates.updateDispureActivity(req); 	break

			case 'add-group-student': 			response = await add.addGroupStudent(req); 						break
			case 'delete-group-student': 		response = await add.removeGroupStudent(req); 				break
			case 'get-hash': 								response = await add.getHash(req); 				break
			case 'set-hash': 								response = await add.setHash(req); 				break

		}

		res.status(response.status).json(response)

	} catch (err) {

		res.status(500).send('Server error :(')
		console.error(err)

	}
}