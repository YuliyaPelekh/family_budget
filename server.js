const express = require('express');
const bodyParser     = require('body-parser');
const app = express();
const db = require('./config/db');
const path = require('path');

app.use(express.static(path.join(__dirname + 'client')));
app.use('/', require('./server/routes/index')(bodyParser)); 
app.use('/*', (req, res, next) => {
	res.sendFile('./client/index.html', { root: __dirname });
});



app.listen(3000);