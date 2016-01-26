var mongoose = require('mongoose');
var PlayerSchema = require('./player').schema;

var TeamSchema = new mongoose.Schema({
  name: { type: String, "default": "A team"},
  players: { type: [PlayerSchema] , "default": [] },
  updated_at: { type: Date, "default": Date.now },
});

module.exports = mongoose.model('Team', TeamSchema);
