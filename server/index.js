const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1>");
});

app.get('/users', (req, res) => {
    axios.get('https://randomuser.me/api/?page=1&results=16')
        .then(response => {
            res.send(response.data);
        });
});

app.listen(3000, () => {
    console.log('server started on port 3000');
});
