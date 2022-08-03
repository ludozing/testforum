const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
.catch(error => console.log(error));

const { Post } = require('./models/Post');

app.get('/getPosts', async(req, res)=>{
    const posts = await Post.find({});
    try {
        return res.status(200).json(posts)
    } catch(err) {return res.status(500).json({error: err});}
});
app.get('/readPost/:id', async(req, res)=>{
    const param = req.params;
    const foundPost = await Post.findOne({postNo: param.id});
    try {
        return res.status(200).json({foundPost})
    } catch(err) {return res.status(500).json({error: err});}
});

const server = http.createServer(app);
server.listen(8080, ()=>console.log('API Server Connected at port 8080'));
