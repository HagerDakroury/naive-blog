const express =  require('express');
const {randomBytes} = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

const commentsById = {};


app.get('/posts/:id/comments', (req,res) => {
    res.send(commentsById[req.params.id] || []);

});

app.post('/posts/:id/comments', async (req,res) => {
    const commentId = randomBytes(3).toString('hex');
    const {content} = req.body;
    const commentsOfPost = commentsById[req.params.id] || [];

    commentsOfPost.push({id: commentId, content : content});

    commentsById[req.params.id]= commentsOfPost;
    
    await axios.post('http://localhost:4005/events', {
        type: 'commentCreated',
        data: {
            id: commentId,
            content,
            postId: req.params.id
        }
    });

    res.status(201).send(commentsOfPost);

});

app.post('/events', (req,res) => {
    console.log("received", req.body.type);
    res.send({});
});


app.listen(4001, () => {
    console.log('listening on 4001');
});