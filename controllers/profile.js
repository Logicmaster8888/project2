
// // const express = require('express')
// // const router = express.Router();

// // const fruits = require('../models/fruits')
// // const blogPosts = require('../models/blogPosts')
// // const profiles = require('../models/profile')

app.post('/editProfile/updateStatus', (req, res) => {
    const { status } = req.body;
  
    // Logic to update status in the database
  });

  app.post('/editProfile/updateAccountInfo', (req, res) => {
    const { Name, Location, lastUpdate } = req.body;
  
    // Update account information in the database based on the received data
  });

  router.post('/updateBasicInfo', async (req, res) => {
    const { userId, gender, birthday, hometown } = req.body;
  
    try {
      // Find the user document in the database by userId
      let user = await User.findById(userId);
  
      // Update the basic information fields
      user.gender = gender;
      user.birthday = birthday;
      user.hometown = hometown;
  
      // Save the updated user document
      user = await user.save();
  
      res.status(200).json({ message: 'Basic information updated successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
    
  
    // Update account information in the database based on the received data


    router.post('/updateBasicInfo', async (req, res) => {
        const { userId, accountName, location, lastUpdate } = req.body;
      
        try {
          // Find the user document in the database by userId
          let user = await User.findById(userId);
      
          // Update the basic information fields
          user.accountName = accountName;
          user.location = location;
          user.lastUpdate = lastUpdate;
      
          // Save the updated user document
          user = await user.save();
      
          res.status(200).json({ message: 'Basic information updated successfully', user });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server Error' });
        }
      });

  app.post('/editProfile/updateContactInfo', (req, res) => {
    const { email, instagram, mobile, address, website } = req.body;
  
    // Update account information in the database based on the received data
  });

  app.post('/editProfile/updateEducationInfo', (req, res) => {
    const { college, highschool } = req.body;
  
    // Update account information in the database based on the received data
  });

  app.post('/editProfile/editBlog', (req, res) => {
    const { postTitle, postContent, postImage, postDate } = req.body;
  
    // Update account information in the database based on the received data
  });
// // // PROFILE
// // router.get('/profile', (req , res) => {
// //     res.render('profile', { blogPosts });
// // });

// // // GET ROUTE
// // router.get('/blogPosts/new', (req, res) => {
// //     res.render('newPost.ejs')
// // })

// // // DELETE ROUTE
// // router.delete('/blogPosts/:index', (req, res) => {
// //     blogPosts.splice(req.params.index, 1)
// //     res.redirect('/blogPosts')
// // }) // models

// // // POST ROUTE
// // router.post("/blogPosts/", (req, res) => {
// //     req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
// //     blogPosts.push(req.body);
// //     res.render('index.ejs', { blogPosts });
// // });

// // // SHOW ROUTE
// // router.get('/blogPosts/:index', (req, res) => {
// //     console.log(req.params.index)
// //     const blogPost = blogPosts [req.params.index]
// //     res.render('show.ejs', {blogPost})
// // })

// // module.exports = router 

// const ProfileController = {
//     updateAccountInfo: (req, res) => {
//         // Logic to update account information
//     },
//     updateBasicInfo: (req, res) => {
//         // Logic to update basic information
//     },
//     updateContactInfo: (req, res) => {
//         // Logic to update contact information
//     },
//     updateEducationInfo: (req, res) => {
//         // Logic to update education information
//     }
// };

// module.exports = ProfileController;

// CITATION 
/***************************************************************************************
*    Title: SEIR-Pixel-Pandas/Fruits, 
*    Author: Billie Heidelberg, Justin White
*    Date: 3-16/ 3-18/24
*    Code version: Latest 3/18
*    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
*
***************************************************************************************/

// CITATION 
/***************************************************************************************
*    Title: Intro to Express, Intro to REST, MVC, EJS, Static ASSETS, REST: CREATE, REST: DELETE
            EJS Partials, CRUD with Mongosh, REST APIs amd CRUD, Authentication
*    Author: Billie Heidelberg, Justin White
*    Date: 3-16/ 3-18/24
*    Code version: Latest 3/18
*    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/Calendar
                    https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/12.%20User%20Auth/BuildMe1_intro.md
                    https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md
                    https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/6.%20Mongoose%20Relationships.md
*                   https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/5.%20Intro%20to%20Mongoose.md
                    https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/3.%20CRUD%20with%20Mongosh.md
                    https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/2.%20Intro%20to%20MongoDB.md
                    https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/10.%20EJS%20Partials.md
                    https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/9.%20REST:%20Update.md
                    https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/8.%20REST:%20Delete.md
                    https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/7.%20REST:%20New%20%2B%20Create%20Routes.md
                    https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/5.%20MVC%20and%20EJS.md
                    https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/4.%20REST:%20Intro%20to%20Rest%20-%20Show%20Route.md
                    https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/2.%20Intro%20to%20Express.md
***************************************************************************************/
