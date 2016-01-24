var express = require('express');
var router = express.Router();
var ctrlGames = require('../controllers/games');
var ctrlPlayers = require('../controllers/player');

// games
router.get('/users', ctrlGames.gamesList);
router.post('/users', ctrlGames.gamesCreate);
router.get('/users/:gameid', ctrlGames.gamesReadOne);
router.put('/users/:gameid', ctrlGames.gamesUpdateOne);
router.delete('/users/:gameid', ctrlGames.gamesDeleteOne);

// players
router.post('/users/:gameid/players', ctrlplayers.playersCreate);
router.get('/users/:gameid/players/:playerid', ctrlplayers.playersReadOne);
router.put('/users/:gameid/players/:playerid', ctrlplayers.playersUpdateOne);
router.delete('/users/:gameid/players/:playerid', ctrlplayers.playersDeleteOne);

module.exports = router;
