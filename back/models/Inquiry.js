const mongoose = require('mongoose');

const inquirySchema = mongoose.Schema({
    postNo: { type: String, required: true, unique: true },
    postClass: { type: String, required: true },
    postTitle: { type: String, required: true },
    postWriter: { type: String, required: true },
    postDate: { type: Date, required: true },
    id: mongoose.Schema.ObjectId,
},{versionKey: false});

const Inquiry = mongoose.model('Inquiry', inquirySchema, 'inquiries');

module.exports = { Inquiry };