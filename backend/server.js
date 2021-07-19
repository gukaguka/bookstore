const express = require('express');
const app = express();

const routesUrls = require('./routes/routes')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
mongoose.connect('mongodb+srv://bookstoremanager:bookstoremanager@cluster0.mab6j.mongodb.net/bookstoredb?retryWrites=true&w=majority', () => console.log('database connected'))

app.use(express.json());
app.use(cors());
app.use('/application', routesUrls);

app.listen(4000, () => console.log('server is runnin good'));