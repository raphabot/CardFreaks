var express = require('express');
var router = express.Router();
var ctrlGames = require('../controllers/games');
var ctrlTeams = require('../controllers/teams');
var ctrlPlayers = require('../controllers/players');

// games
router.get('/games', ctrlGames.gamesList);
router.post('/games', ctrlGames.gamesCreate);
router.get('/games/:gameid', ctrlGames.gamesReadOne);
router.put('/games/:gameid', ctrlGames.gamesUpdateOne);
router.delete('/games/:gameid', ctrlGames.gamesDeleteOne);
router.get('/games/:gameid/teams', ctrlGames.gameListAllTeams);

// team
router.post('/games/:gameid/teams', ctrlTeams.teamsCreate);
router.get('/games/:gameid/teams/:teamid', ctrlTeams.teamsReadOne);
/*
router.put('/games/:gameid/teams/:teamid', ctrlTeams.teamsUpdateOne);
router.delete('/games/:gameid/teams/:teamid', ctrlTeams.teamsDeleteOne);
*/

// players
router.get('/players', ctrlPlayers.playersList);
router.post('/players', ctrlPlayers.playersCreate);

module.exports = router;
