const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const requireAuth = require('../middleware/requireAuth');
const User = require('../models/User');

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Example protected route - returns the logged-in user's own info
// Used by the frontend to check "am I logged in?" on page load
router.get('/me', requireAuth, async (req, res) => {
  const user = await User.findById(req.userId).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found.' });
  res.json({ user });
});

module.exports = router;