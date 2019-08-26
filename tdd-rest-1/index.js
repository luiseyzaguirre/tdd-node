const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const  bodyParser =  require('body-parser');
const morgan = require('morgan');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//usamos morgan
app.use(morgan('dev'));
//usamos json
app.use(express.json());

app.get('/users', async(req, res) => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');    
    res.status(200).send(data);
});

app.post('/users', async(req, res)=>{
    const {body} =  req.body;
    const {data} = await axios.post('https://jsonplaceholder.typicode.com/users', body);    
    res.status(200).send(data);
});

app.put('/users/:id', async(req, res)=>{
    const {id} =  req.params;
    const {body} = req;
    await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body);    
    res.send('User Updated Successful');
});

app.delete('/users/:id', async(req, res)=>{
    const {id} =  req.params;
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);    
    res.send('User Deleted Successful');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
