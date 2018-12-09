const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Author', authorSchema);