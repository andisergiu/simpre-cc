const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timeIn: Date,
  timeOut: Date,
  date: { type: Date, default: Date.now }
});

const Record = mongoose.model('Record', recordSchema);
module.exports = Record;