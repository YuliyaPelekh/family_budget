'use strict';

let express = require('express');

const router = express.Router();

const users = require('./users.routes')
//       goods = require('./goods.routes'),
//       categories = require('./categories');

module.exports = bodyParser => {

//incoming data parsers
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));



//include other controllers
router.use('/users', users);
// router.use('/goods', goods);
// router.use('/categories', categories);


    return router;

};