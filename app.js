const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  // Start server
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});