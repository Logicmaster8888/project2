// const express = require('express')
// const router = express.Router();

// // Pulling from models database
// const blogPosts = require('../models/blogPosts');
// const profile = require('../models/profile');

// // INDEX
// router.get('/', (req , res) => {
//     // Render the home page (index.ejs)
//     res.render('index');
// });

// // Profile Page
// // router.get('/profile', async (req, res) => { 
// //     try {
// //         // Fetch user profile data from the database 
// //         // Replace the above line with database query to fetch profile
// //         const userProfile = await profile.findOne({ username: req.user.username });
        
// //         // Render the profile page (profile.ejs) with the user profile data
// //         res.render('profile.ejs', { profile: userProfile });
// //     } catch (error) {
// //         console.error('Cannot Pull Profile', error); 
// //         res.status(500).send('Internal Server Error');
// //     }
// // });

// // Edit Profile Page
// router.get('/profile/editProfile', (req, res) => {
//     res.render('editprofile', { profile });
// });

// // Endpoint
// module.exports = router;
