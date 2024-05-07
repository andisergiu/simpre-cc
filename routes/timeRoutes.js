const express = require('express');
const router = express.Router();
const TimeRecord = require('../models/TimeRecord');

// Punch in
router.post('/punch-in', async (req, res) => {
  const record = new TimeRecord({ userId: req.body.userId });
  try {
    await record.save();
    res.status(201).send(record);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Punch out
router.post('/punch-out', async (req, res) => {
  try {
    const record = await TimeRecord.findOneAndUpdate(
      { userId: req.body.userId, punchOut: null },
      { punchOut: new Date() },
      { new: true }
    );
    if (!record) {
      return res.status(404).send('No active session found.');
    }
    res.send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;