const express =  require('express');
const {randomBytes} = require('crypto');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); 

const commentsById = {};


app.get('/posts/:id/comments', (req,res) => {
    const postId = req.params.id;
    
    res.send(commentsById[postId] || []);

});

app.post('/posts/:id/comments', (req,res) => {
    const commentId = randomBytes(3).toString('hex');
    const postId = req.params.id;
    const {content} = req.body;

    commentsById[postId].push({id: commentId, content : content});

    res.status(201).send(commentsById[postId]);

});



app.listen(3003, () => {
    console.log('listening on 3003');
});