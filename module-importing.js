const _ = require('underscore');
const games = require('./data/games')

_.each(games, function(game) {
    console.log(game.name);
});