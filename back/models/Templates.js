const mongoose = require('mongoose');

const templateSchema = mongoose.Schema({
    t_name: { type: String, required: true },
    t_id: { type: String, required: true, unique: true },
    t_thumbnail: { type: String },
    t_type: { type: String, required: true },
    t_row: {type: Number, required: true},
    t_col: {type: Number, required: true},
    id: mongoose.Schema.ObjectId,
},{versionKey: false});

const Template = mongoose.model('Template', templateSchema, 'templates');

module.exports = { Template };