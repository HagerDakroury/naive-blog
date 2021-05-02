const express =  require('express');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); 

app.post('/events', (req, res) => {
    const event = req.body;

    //rerouting this events to all other services 
    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);

    res.send({status: 'OK'});
});

app.listen(4005, () => {
    console.log('listening on 4005');
});