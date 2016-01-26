var mongoose = require('mongoose');
var TeamSchema = require('./team').schema;

var maxTeamSize = 2;

var GameSchema = new mongoose.Schema({
  name: { type: String, "default": "A game"},
  date: { type: Date, "default": Date.now },
  teams: { type: [TeamSchema], "default": [] , validate: [teamsValidator, '{PATH} exceeds the limit of ' + maxTeamSize]},
  updated_at: { type: Date, "default": Date.now },
});


function teamsValidator(val){
  return val.length <= maxTeamSize;
}

module.exports = mongoose.model('Game', GameSchema);
