const mongoose = require('mongoose');

const librarySchema = mongoose.Schema({
    type: { type: String, required: true },
    thumbnailURL: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    width: {type: Number, required: true },
    height: {type: Number, required: true },
    id: mongoose.Schema.ObjectId,
},{versionKey: false});

const Library = mongoose.model('Library', librarySchema, 'libraries');

module.exports = { Library };