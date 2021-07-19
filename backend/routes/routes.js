const express = require('express');

const router = express.Router();

const CallRequest = require('../models/signupmodels');

router.post('/bookstore', (request, response) => {
	//req.send('hey dont fuck up'); 
	const callRequest = new CallRequest({
		name:request.body.name,
		phone:request.body.phone,
	})

	callRequest.save().then(data => {response.json(data)}).catch(error => {response.json(error)})
})


module.exports = router;