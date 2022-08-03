const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    postNo: { type: String, required: true, unique: true },
    postClass: { type: String, required: true },
    postTitle: { type: String, required: true },
    postWriter: { type: String, required: true },
    postDate: { type: Date, required: true },
    viewCount: { type: Number, required: true },
    postContent: { type: String, required: true },
    postComment: { type: mongoose.SchemaTypes.Mixed },
    id: mongoose.Schema.ObjectId,
},{versionKey: false});

const Post = mongoose.model('Post', PostSchema, 'posts');

module.exports = { Post };