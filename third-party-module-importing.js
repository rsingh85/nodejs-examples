const _ = require('underscore'); // run: npm install underscore --save
const games = require('./data/games')

_.each(games, function(game) {
    console.log(game.name);
});