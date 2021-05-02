const express =  require('express');
const {randomBytes} = require('crypto');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

const commentsById = {};


app.get('/posts/:id/comments', (req,res) => {
    const postId = req.params.id;
    
    res.send(commentsById[postId] || []);

});

app.post('/posts/:id/comments', (req,res) => {
    console.log('got it');
    const commentId = randomBytes(3).toString('hex');
    const postId = req.params.id;
    const {content} = req.body;
    const commentsOfPost = commentsById[postId] || [];

    commentsOfPost.push({id: commentId, content : content});

    commentsById[postId]= commentsOfPost;
    res.status(201).send(commentsOfPost);

});



app.listen(4001, () => {
    console.log('listening on 4001');
});