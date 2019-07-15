var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var app = express();
const config = require('./config/config');

const db = require('./config/database');
db(config.connectionString);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
let filesPath = path.join(__dirname, 'public');
app.use(express.static(filesPath));
app.use(cors());
app.set('views', filesPath);

module.exports = app;
