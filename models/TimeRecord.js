const mongoose = require('mongoose');

const timeRecordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  punchIn: { type: Date, default: Date.now },
  punchOut: { type: Date }
});

module.exports = mongoose.model('TimeRecord', timeRecordSchema);