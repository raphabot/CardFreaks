var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
  name: { type: String, "default": "A player"},
  updated_at: { type: Date, "default": Date.now },
});

module.exports = mongoose.model('Player', PlayerSchema);
