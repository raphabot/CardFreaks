var mongoose = require('mongoose');
var Game = mongoose.model('Game');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.gamesList = function (req, res) {
  Game.find().exec(function(err, games){
    if (err) return next(err);
    res.json(games);
  });
};

module.exports.gamesCreate = function (req, res) {
  Game.create({
    name: req.body.name,
    date: req.body.date,
  }, function(err, game){
    if (err){
      sendJsonResponse(res, 400, err);
    } else{
      sendJsonResponse(res, 201, game);
    }
  });
};

module.exports.gamesReadOne = function (req, res) {
  if (req.params && req.params.gameid){
    Game.findById(req.params.gameid).exec(function (err, game){
      if (!game){
        sendJsonResponse(res, 404,
          { "message": "gameid not found."
        });
      return;
      } else if (err){
        sendJsonResponse(res, 404, err);
        return;
      }
      sendJsonResponse(res, 200, game);
    });
  }
};

module.exports.gamesUpdateOne = function (req, res) { };
module.exports.gamesDeleteOne = function (req, res) { };

module.exports.gameListAllTeams = function(req, res) {
  if (req.params && req.params.gameid){
    Game.findById(req.params.gameid).exec(function (err, game){
      if (!game){
        sendJsonResponse(res, 404,
          { "message": "gameid not found."
        });
      return;
      } else if (err){
        sendJsonResponse(res, 404, err);
        return;
      }
      sendJsonResponse(res, 200, game.teams);
    });
  }
};
