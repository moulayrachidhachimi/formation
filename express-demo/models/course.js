const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    label: String,
    price: Number,
    tags: [String],
    datePublish: Date,
    author: String,
    status: Boolean
});

module.exports = mongoose.model('Course', courseSchema);