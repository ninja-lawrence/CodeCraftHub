const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register endpoint
router.post('/register', userController.register);
// Login endpoint
router.post('/login', userController.login);
// Get user profile
router.get('/:id', userController.getUserProfile);

module.exports = router;