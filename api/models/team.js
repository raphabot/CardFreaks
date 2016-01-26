var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
  name: { type: String, "default": "A team"},
  //players: [Player],
  updated_at: { type: Date, "default": Date.now },
});

module.exports = mongoose.model('Team', TeamSchema);
