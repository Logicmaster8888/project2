const express = require('express');
const router = express.Router();
const User = require('../../models/User'); // Import the User model

// Middleware to ensure user is authenticated
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next(); // User is authenticated, proceed to the next middleware
    } else {
        res.redirect('/login'); // User is not authenticated, redirect to the login page
    }
};

// Controller function to handle form submission and update profile
const updateProfile = (req, res) => {
    // Extract updated profile data from the request body
    const { name, email, location } = req.body;

    // Update the user's profile data in the database
    User.findByIdAndUpdate(req.user.id, { name, email, location }, { new: true }, (err, updatedUser) => {
        if (err) {
            console.error("Error updating user profile:", err);
            res.status(500).send("Internal Server Error");
        } else {
            // Render the profile page with the updated user data
            res.render('profile', { title: 'Your Profile', message: 'Edit Your Profile', user: updatedUser });
        }
    });
};

const renderProfilePage = (req, res) => {
    // Retrieve the user data from the database
    User.findById(req.user.id, (err, user) => {
        if (err) {
            console.error("Error fetching user data:", err);
            res.status(500).send("Internal Server Error");
        } else {
            // Render the profile page with the user data
            res.render('profile', { title: 'Your Profile', message: 'Edit Your Profile', user: user });
        }
    });
};

// Route to handle form submission for updating profile
router.post('/update-profile', ensureAuthenticated, updateProfile);

// Route to render the profile page
router.get('/profile', ensureAuthenticated, renderProfilePage);
// Route to handle form submission for updating profile
router.post('/update-profile', ensureAuthenticated, updateProfile);

module.exports = router;
