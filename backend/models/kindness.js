const mongoose = require('mongoose');

const kindnessSchema = new mongoose.Schema({
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Kindness', kindnessSchema);