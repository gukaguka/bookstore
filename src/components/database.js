
const express = require('express');
const app = express();

app.get('/', (req,res) => {

});

const mongoose = require('mongoose');
mongoose.connect('mangodb://localhost/bookstore').then(console.log('connected to database'))
.catch(err => console.error('can not connect to database', err));

const schema = new mongoose.Schema({
	name: String,
})
const CallRequest = mongoose.model('myFirstDatabase', schema);

module.exports = CallRequest;
//onClick={async () => {const callRequest = new CallRequest({name:inject.title}); await callRequest.save()} }