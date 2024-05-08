const express = require('express');
const router = express.Router();
const TimeRecord = require('../models/TimeRecord');

router.post('/time-in', async (req, res) => {
    const { userId } = req.body;
    const record = new TimeRecord({ user: userId, timeIn: new Date() });
    await record.save();
    res.status(201).send(record);
});

router.post('/time-out', async (req, res) => {
    const { recordId } = req.body;
    await TimeRecord.findByIdAndUpdate(recordId, { timeOut: new Date() });
    res.status(200).send('Time out recorded.');
});

module.exports = router;