const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    chatLog: [],
    spaceName: { type: String, required: true },
    spaceOwner: { type: String, required: true },
    id: mongoose.Schema.ObjectId,
},{versionKey: false});

const Chat = mongoose.model('Chat', chatSchema, 'chatrooms');

module.exports = { Chat };