const mongoose = require('mongoose');

const spaceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    spaceName: { type: String, required: true },
    spaceSnapshot: { type: String, required: true },
    chatServer: { type: String, required: true },
    equipmentData: { type: mongoose.SchemaTypes.Mixed },
    tileData: { type: mongoose.SchemaTypes.Mixed },
    fieldSize: { type: mongoose.SchemaTypes.Mixed },
    id: mongoose.Schema.ObjectId,
},{versionKey: false});

const Space = mongoose.model('Space', spaceSchema, 'space');

module.exports = { Space };