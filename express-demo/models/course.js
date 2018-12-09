const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    label: { type: String, trim: true, required: true },
    price: { type: Number, get: v => Math.round(v), set: v => Math.round(v), min: 10, max: 120 },
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
    datePublish: { type: Date, default: Date.now },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
    status: { type: Boolean, default: true }
});

module.exports = mongoose.model('Course', courseSchema);