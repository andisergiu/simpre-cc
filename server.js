require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express('../simpre-cc');
const helmet = require('helmet');

// Additional require statement
const recordRoutes = require('./routes/Record');

app.use(helmet());
app.use(express.json());

const port = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Time Tracking API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;

// Use the record routes in the application
app.use('/api/records', recordRoutes);
