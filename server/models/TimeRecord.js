const mongoose = require('mongoose');

const TimeRecordSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timeIn: { type: Date, required: true },
  timeOut: { type: Date }
});
module.exports = mongoose.model('TimeRecord', TimeRecordSchema);