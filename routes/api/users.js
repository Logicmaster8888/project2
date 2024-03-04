const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserController = require('../../controllers/usersController');

// Register route
router.post('/register', UserController.register);

// Login route
router.post('/login', passport.authenticate('local'), UserController.login);

// Logout route
router.get('/logout', UserController.logout);

module.exports = router;
