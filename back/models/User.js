const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: { type: String, required: true, unique: true, lowercase: true, trim: true },
    userPw: { type: String, required: true, trim: true },
    userEmail: { type: String, required: true, trim: true, unique: true, lowercase: true },
    userName: { type: String, required: true },
    isManager: { type: Boolean, required: true },
    id: mongoose.Schema.ObjectId,
},{versionKey: false});

const User = mongoose.model('User', userSchema, 'users');

module.exports = { User };