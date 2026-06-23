require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

// ---- Middleware ----
app.use(cors());            // allow the frontend (different port) to call this API
app.use(express.json());    // parse JSON request bodies

// ---- Routes ----
app.use('/api/auth', authRoutes);

// Simple health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Traveler\'s Info Junction API is running.' });
});

// ---- Connect to MongoDB, then start the server ----
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    console.error('   Make sure MongoDB is installed and running locally (try: mongod)');
  });