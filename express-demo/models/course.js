const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    label: String,
    status: Boolean
});

module.exports = mongoose.model('Course', courseSchema);