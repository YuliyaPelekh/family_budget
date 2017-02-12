'use strict';

let express = require('express');

const router = express.Router();
  const User = require('../models/users');

function registerUser(){

}

function signUser(){

}

function getUsers(req, res){
	res.send('Hello Yuliya');
   
}

router.get('/', getUsers);

//routes
// router.get('/:id', controllers.getById);
// router.get('/byemail/:email', controllers.getByEmail);
router.post('/', registerUser); //creating user and pushing to DB
router.post('/login', signUser);
// router.get('/items/:email/selling', controllers.getSellingItemsOfUser);
// router.get('/email/:email/watchlist', controllers.getWatchlistItemsOfUser);
// router.get('/email/:email/watch_id', controllers.getWatchlistItemById);
// router.put('/email/:email/start_watching', controllers.addItemToWatchlist);
// router.put('/email/:email/stop_watching', controllers.removeItemFromWatchlist);
// router.get('/items/:email/buying', controllers.getBuyingItems);
// router.put('/items/buying/', controllers.addBuyingItem);
// router.put('/notify/buying/', controllers.notifyBuyer);
// /*router.put('/items/buying/remove/', buyingRemove);*/
// router.put('/update/:email', controllers.updateAccount);
// //router.put('/updatepassword', updatePassword);
// router.put('/updatepassword/:email', controllers.updatePassword);

module.exports = router;