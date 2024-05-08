const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});
module.exports = mongoose.model('User', UserSchema);

// models/TimeRecord.js
const TimeRecordSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    timeIn: { type: Date, required: true },
    timeOut: { type: Date }
});
module.exports = mongoose.model('TimeRecord', TimeRecordSchema);