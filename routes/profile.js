const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

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

// Route to handle form submission for updating profile
router.post('/update-profile', updateProfile);

module.exports = router;
