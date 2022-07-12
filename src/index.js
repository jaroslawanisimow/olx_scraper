const express = require('express');
const data = require('./data');

const app = express();

app.get('/cars', (req, res) => {
    res.send(data);
});

app.listen(3000, () => 'Start on port 3000')



