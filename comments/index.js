const express =  require('express');
const {randomBytes} = require('crypto');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

const commentsById = {};


app.get('/posts/:id/comments', (req,res) => {
    console.log(req.params.id)
    res.send(commentsById[req.params.id] || []);

});

app.post('/posts/:id/comments', (req,res) => {
    const commentId = randomBytes(3).toString('hex');
    const {content} = req.body;
    const commentsOfPost = commentsById[req.params.id] || [];

    commentsOfPost.push({id: commentId, content : content});

    commentsById[req.params.id]= commentsOfPost;
    console.log(commentsById);

    res.status(201).send(commentsOfPost);

});



app.listen(4001, () => {
    console.log('listening on 4001');
});