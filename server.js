const express = require('express');
const bodyParser     = require('body-parser');
const app = express();
const db = require('./config/db');
const path = require('path');
const timeout = require('connect-timeout');
const port = 8082;

app.use(express.static(path.join(__dirname + 'client')));
app.use(timeout('3s'));
app.use('/', require('./server/routes/index')(bodyParser)); 
app.use('/*', (req, res, next) => {
	res.sendFile('./client/index.html', { root: __dirname });
});



app.listen(port);