var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
let filesPath = path.join(__dirname, 'public');
app.use(express.static(filesPath));
app.use(cors());
app.set('views', filesPath);

app.get('/**', (req, res) => {
    res.sendFile(`${filesPath}/index.html`);
});

module.exports = app;
