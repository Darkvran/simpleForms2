const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const authRoutes = require('./routes/auth');
const userNumber = require('./routes/usersNum');

const app = express ();

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB подключен.'))
    .catch(error => console.log(error));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/getUserNum', userNumber);


module.exports = app;