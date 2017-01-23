"use strict";

const mongoose = require('mongoose')
      // bcrypt   = require('bcrypt-nodejs'),

let Schema = mongoose.Schema;

let userModel = mongoose.Schema({
    email: {type: String},
    password: String,
    firstname: String,
    lastname: String,
    mobile: Number
});


// userModel.methods.generateHash = (password) => {
//     return bcrypt.hashSync(password);
// };
// userModel.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

module.exports = mongoose.model("User", userModel);