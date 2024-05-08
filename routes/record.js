const express = require('express');
const Record = require('../models/Record');
const router = express.Router();

// Route to post a time-in and time-out
router.post('/', async (req, res) => {
  const { userId, timeIn, timeOut } = req.body;
  try {
    const newRecord = new Record({ userId, timeIn, timeOut });
    await newRecord.save();
    res.status(201).send('Record added successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to get records for a user
router.get('/:userId', async (req, res) => {
  try {
    const records = await Record.find({ userId: req.params.userId });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;