var mongoose = require('mongoose');
var Team = mongoose.model('Team');
var Game = mongoose.model('Game');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.teamsCreate = function (req, res) {
  if (req.params.gameid) {
    Game.findById(req.params.gameid).select('teams').exec(
        function(err, game) {
          if (err) {
            sendJSONresponse(res, 400, err);
          } else {
            doAddTeam(req, res, game);
          }
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "Not found, gameid required"
    });
  }
};
module.exports.teamsReadOne = function (req, res) {
  console.log("Getting single team");
    if (req.params && req.params.gameid && req.params.teamid) {
      Game.findById(req.params.gameid).select('name teams')
      .exec(function(err, game) {
            console.log(game);
            var response, team;
            if (!game) {
              sendJSONresponse(res, 404, {
                "message": "gameid not found"
              });
              return;
            } else if (err) {
              sendJSONresponse(res, 400, err);
              return;
            }
            if (game.teams && game.teams.length > 0) {
              team = game.teams.id(req.params.teamid);
              if (!team) {
                sendJSONresponse(res, 404, {
                  "message": "teamid not found"
                });
              } else {
                response = {
                  game: {
                    name: game.name,
                    id: req.params.gameid
                  },
                  team: team
                };
                sendJSONresponse(res, 200, response);
              }
            } else {
              sendJSONresponse(res, 404, {
                "message": "No teams found"
              });
            }
          }
      );
    } else {
      sendJSONresponse(res, 404, {
        "message": "Not found, gameid and teamid are both required"
      });
    }
};
module.exports.teamsUpdateOne = function (req, res) { };
module.exports.teamsDeleteOne = function (req, res) { };


//Aux

var doAddTeam = function(req, res, game) {
  if (!game) {
    sendJSONresponse(res, 404, "gameid not found");
  } else {
    game.teams.push({
      name: req.body.name
    });
    game.save(function(err, game) {
      var thisTeam;
      if (err) {
        sendJSONresponse(res, 400, err);
      } else {
        thisTeam = game.teams[game.teams.length - 1];
        sendJSONresponse(res, 201, thisTeam);
      }
    });
  }
};
