const express = require('express');
const games = require('./data/games');

const server = express();
const port = 3000;

const handleHome = function(req, res) {
    res.send('Welcome to the home page');
};

server.get('/', handleHome);
server.get('/home', handleHome);
server.get('/games', function (req, res) {
    res.contentType('application/json');
    res.send(games);
})

server.listen(port);
console.log(`Listening for web requests on port ${port}...`);