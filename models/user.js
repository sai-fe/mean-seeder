var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    firstName,
    lastName,
    password,
    email,
    messages
});

module.exports = mongoose.model('Message', schema);