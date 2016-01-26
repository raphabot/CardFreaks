var mangoose = require('mongoose');
var Player = mangoose.model('Player');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.playersList = function (req, res) {
  Player.find().exec(function(err, players){
    if (err) return next(err);
    res.json(players);
  });
};
module.exports.playersCreate = function (req, res) {
  Player.create({
    name: req.body.name
  }, function(err, player){
    if (err){
      sendJsonResponse(res, 400, err);
    } else{
      sendJsonResponse(res, 201, player);
    }
  });
};
module.exports.playersReadOne = function (req, res) { };
module.exports.playersUpdateOne = function (req, res) { };
module.exports.playersDeleteOne = function (req, res) { };
