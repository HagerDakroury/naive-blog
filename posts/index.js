const express =  require('express');
const {randomBytes} = require('crypto');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); 

const posts = {};


app.get('/posts', (req,res) => {
    res.send(posts);

});

app.post('/posts', (req,res) => {
    const id = randomBytes(3).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);

});



app.listen(3008, () => {
    console.log('listening on 3008');
});