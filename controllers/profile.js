const express = require('express');
const router = express.Router();
// const Profile = require('../models/profile');

app.post('/updateStatus', async (req, res) => {
  try {
      // Create a new status document
      const newStatus = new Status({
          // Assuming 'status' is a field in your form
          status: req.body.status
      });
      // Save the status to the database
      await newStatus.save();
      res.render('status_success'); // Render success page
  } catch (error) {
      res.render('error', { error: error.message }); // Render error page with error message
  }
});
// Form Data To Mongodb Review - Line 1-323 
      // OpenAI. (n.d.). How to Build a Website with Node.js and Express [Video file]. 
      // Retrieved from https://www.youtube.com/watch?v=4sTmSlZDGow
      // https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFlHSDBSSnJSU0hiZTd0MENFZUFwX1oxVzc5QXxBQ3Jtc0ttWnpPNnpRZWhfX2pEbUFmNkhpYWdINklsSFBPV3ZqN3VUVUJvTGJVNVhHNS1sd3ZXMkZaRWxJc2JOME8tM2J2YW5BdWhNVExjSnQyUkdRVjRJTFlBaFRhUjJhaW9BVHlzT2ZyY0tMWG9xb3gyNFAwWQ&q=https%3A%2F%2Fopenjavascript.info%2F2023%2F03%2F13%2Freceive-form-data-in-node-js-with-and-without-files%2F&v=4sTmSlZDGow
    // Date 3/3-19
//       Authors: Justin White, Andrew DeitrickBillie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md
      
//       Authors: Justin White, Andrew DeitrickBillie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md
// // Source: Xano. (n.d.). Xano - The No Code Backend Platform. Retrieved from https://www.xano.com

// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// Source: YouTube
URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: EJS Partials on GitHub
// Title: CRUD with Mongosh
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/3.%20CRUD%20with%20Mongosh.md

// Authors: Justin White, Andrew DeitrickBillie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST APIs and CRUD on GitHub
// Title: Authentication
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/12.%20User%20Auth/BuildMe1_intro.md



  router.post('/updateUserInfo', async (req, res) => {
    const { userId, name, location, lastUpdate } = req.body;
  
    try {
      // Find the user document in the database by userId
      let user = await User.findById(userId);
  
      // Update the user information fields
      user.name = name;
      user.location = location;
      user.lastUpdate = lastUpdate;
  
      // Save the updated user document
      user = await user.save();
  
      res.status(200).json({ message: 'User information updated successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });


  // Authors: Billie Heidelberg, Justin White, Andrew Deitrick
  // Date: 3/24
  // Code Version: Latest 3/18
  // Availability: EJS Partials on GitHub
  // Title: CRUD with Mongosh
  // https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/3.%20CRUD%20with%20Mongosh.md
  
  // Authors: Justin White, Andrew DeitrickBillie Heidelberg
  // Date: 3/24
  // Code Version: Latest 3/18
  // Availability: CRUD with Mongosh on GitHub
  // Title: REST APIs and CRUD
  // https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md
  
  // Authors: Justin White, Andrew Deitrick Billie Heidelberg
  // Date: 3/24
  // Code Version: Latest 3/18
  // Availability: REST APIs and CRUD on GitHub
  // Title: Authentication
  // https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/12.%20User%20Auth/BuildMe1_intro.md

// Form Data To Mongodb Review
      // OpenAI. (n.d.). How to Build a Website with Node.js and Express [Video file]. 
      // Retrieved from https://www.youtube.com/watch?v=4sTmSlZDGow
      // https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFlHSDBSSnJSU0hiZTd0MENFZUFwX1oxVzc5QXxBQ3Jtc0ttWnpPNnpRZWhfX2pEbUFmNkhpYWdINklsSFBPV3ZqN3VUVUJvTGJVNVhHNS1sd3ZXMkZaRWxJc2JOME8tM2J2YW5BdWhNVExjSnQyUkdRVjRJTFlBaFRhUjJhaW9BVHlzT2ZyY0tMWG9xb3gyNFAwWQ&q=https%3A%2F%2Fopenjavascript.info%2F2023%2F03%2F13%2Freceive-form-data-in-node-js-with-and-without-files%2F&v=4sTmSlZDGow

// Source: Xano. (n.d.). Xano - The No Code Backend Platform. Retrieved from https://www.xano.com

// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// Source: YouTube
URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt



  router.post('/updateBasicInfo', async (req, res) => {
    const { userId, gender, birthday, hometown } = req.body;
  
    try {
      let user = await User.findById(userId);
  
      user.gender = gender;
      user.birthday = birthday;
      user.hometown = hometown;
  
      user = await user.save();
  
      res.status(200).json({ message: 'Basic information updated successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  // Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// Source: YouTube
URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt

  
// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: EJS Partials on GitHub
// Title: CRUD with Mongosh
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/3.%20CRUD%20with%20Mongosh.md

// Authors: Justin White, Andrew DeitrickBillie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST APIs and CRUD on GitHub
// Title: Authentication
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/12.%20User%20Auth/BuildMe1_intro.md

// // Form Data To Mongodb Review
      // OpenAI. (n.d.). How to Build a Website with Node.js and Express [Video file]. 
      // Retrieved from https://www.youtube.com/watch?v=4sTmSlZDGow
      // https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFlHSDBSSnJSU0hiZTd0MENFZUFwX1oxVzc5QXxBQ3Jtc0ttWnpPNnpRZWhfX2pEbUFmNkhpYWdINklsSFBPV3ZqN3VUVUJvTGJVNVhHNS1sd3ZXMkZaRWxJc2JOME8tM2J2YW5BdWhNVExjSnQyUkdRVjRJTFlBaFRhUjJhaW9BVHlzT2ZyY0tMWG9xb3gyNFAwWQ&q=https%3A%2F%2Fopenjavascript.info%2F2023%2F03%2F13%2Freceive-form-data-in-node-js-with-and-without-files%2F&v=4sTmSlZDGow
// Source: Xano. (n.d.). Xano - The No Code Backend Platform. Retrieved from https://www.xano.com

// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// // Author: The Net Ninja
// // Source: YouTube
// URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: EJS Partials on GitHub
// Title: CRUD with Mongosh
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/3.%20CRUD%20with%20Mongosh.md

// Authors: Justin White, Andrew DeitrickBillie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST APIs and CRUD on GitHub
// Title: Authentication
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/12.%20User%20Auth/BuildMe1_intro.md



  app.post('/editProfile/updateProfile', async (req, res) => {
    try {
        // Create or update the profile document
        // Assuming you have a profile model and 'profileInputs' correspond to its fields
        const updatedProfile = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.render('profile_success'); // Render success page
    } catch (error) {
        res.render('error', { error: error.message }); // Render error page with error message
    }
});

// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// Source: YouTube
URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt



// Form Data To Mongodb Review
      // OpenAI. (n.d.). How to Build a Website with Node.js and Express [Video file]. 
      // Retrieved from https://www.youtube.com/watch?v=4sTmSlZDGow
      // https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFlHSDBSSnJSU0hiZTd0MENFZUFwX1oxVzc5QXxBQ3Jtc0ttWnpPNnpRZWhfX2pEbUFmNkhpYWdINklsSFBPV3ZqN3VUVUJvTGJVNVhHNS1sd3ZXMkZaRWxJc2JOME8tM2J2YW5BdWhNVExjSnQyUkdRVjRJTFlBaFRhUjJhaW9BVHlzT2ZyY0tMWG9xb3gyNFAwWQ&q=https%3A%2F%2Fopenjavascript.info%2F2023%2F03%2F13%2Freceive-form-data-in-node-js-with-and-without-files%2F&v=4sTmSlZDGow

// Source: Xano. (n.d.). Xano - The No Code Backend Platform. Retrieved from https://www.xano.com

app.post('/blogPost/', async (req, res) => {
  try {
      // Create a new blog post document
      // Assuming you have a blog post model and 'blogInputs' correspond to its fields
      const newBlogPost = new BlogPost(req.body);
      await newBlogPost.save();
      res.render('blog_success'); // Render success page
  } catch (error) {
      res.render('error', { error: error.message }); // Render error page with error message
  }
});
// Form Data To Mongodb Review
      // OpenAI. (n.d.). How to Build a Website with Node.js and Express [Video file]. 
      // Retrieved from https://www.youtube.com/watch?v=4sTmSlZDGow
      // https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFlHSDBSSnJSU0hiZTd0MENFZUFwX1oxVzc5QXxBQ3Jtc0ttWnpPNnpRZWhfX2pEbUFmNkhpYWdINklsSFBPV3ZqN3VUVUJvTGJVNVhHNS1sd3ZXMkZaRWxJc2JOME8tM2J2YW5BdWhNVExjSnQyUkdRVjRJTFlBaFRhUjJhaW9BVHlzT2ZyY0tMWG9xb3gyNFAwWQ&q=https%3A%2F%2Fopenjavascript.info%2F2023%2F03%2F13%2Freceive-form-data-in-node-js-with-and-without-files%2F&v=4sTmSlZDGow

// Source: Xano. (n.d.). Xano - The No Code Backend Platform. Retrieved from https://www.xano.com

// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// Source: YouTube
URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: EJS Partials on GitHub
// Title: CRUD with Mongosh
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/3.%20CRUD%20with%20Mongosh.md

// Authors: Justin White, Andrew DeitrickBillie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST APIs and CRUD on GitHub
// Title: Authentication
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/12.%20User%20Auth/BuildMe1_intro.md


    router.post('/updateBasicInfo', async (req, res) => {
        const { userId, accountName, location, lastUpdate } = req.body;
      
        try {
          let user = await User.findById(userId);
      
          user.accountName = accountName;
          user.location = location;
          user.lastUpdate = lastUpdate;
      
          user = await user.save();
      
          res.status(200).json({ message: 'Basic information updated successfully', user });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server Error' });
        }
      });

      // Form Data To Mongodb Review
      // OpenAI. (n.d.). How to Build a Website with Node.js and Express [Video file]. 
      // Retrieved from https://www.youtube.com/watch?v=4sTmSlZDGow
      // https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFlHSDBSSnJSU0hiZTd0MENFZUFwX1oxVzc5QXxBQ3Jtc0ttWnpPNnpRZWhfX2pEbUFmNkhpYWdINklsSFBPV3ZqN3VUVUJvTGJVNVhHNS1sd3ZXMkZaRWxJc2JOME8tM2J2YW5BdWhNVExjSnQyUkdRVjRJTFlBaFRhUjJhaW9BVHlzT2ZyY0tMWG9xb3gyNFAwWQ&q=https%3A%2F%2Fopenjavascript.info%2F2023%2F03%2F13%2Freceive-form-data-in-node-js-with-and-without-files%2F&v=4sTmSlZDGow

      // Source: Xano. (n.d.). Xano - The No Code Backend Platform. Retrieved from https://www.xano.com

// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// Source: YouTube
URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt



      router.post('/updateBasicInfo', async (req, res) => {
        const { userId, email, instagram, mobile, address, website } = req.body;
      
        try {
          let user = await User.findById(userId);
      
          user.email = email;
          user.instagram = instagram;
          user.mobile = mobile;
          user.address = address;
          user.website = website;
      
          user = await user.save();
      
          res.status(200).json({ message: 'Basic information updated successfully', user });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server Error' });
        }
      });

      // Form Data To Mongodb Review
      // OpenAI. (n.d.). How to Build a Website with Node.js and Express [Video file]. 
      // Retrieved from https://www.youtube.com/watch?v=4sTmSlZDGow
      // https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFlHSDBSSnJSU0hiZTd0MENFZUFwX1oxVzc5QXxBQ3Jtc0ttWnpPNnpRZWhfX2pEbUFmNkhpYWdINklsSFBPV3ZqN3VUVUJvTGJVNVhHNS1sd3ZXMkZaRWxJc2JOME8tM2J2YW5BdWhNVExjSnQyUkdRVjRJTFlBaFRhUjJhaW9BVHlzT2ZyY0tMWG9xb3gyNFAwWQ&q=https%3A%2F%2Fopenjavascript.info%2F2023%2F03%2F13%2Freceive-form-data-in-node-js-with-and-without-files%2F&v=4sTmSlZDGow

// Source: Xano. (n.d.). Xano - The No Code Backend Platform. Retrieved from https://www.xano.com

// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// Source: YouTube
// URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: EJS Partials on GitHub
// Title: CRUD with Mongosh
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/3.%20CRUD%20with%20Mongosh.md

// Authors: Justin White, Andrew DeitrickBillie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST APIs and CRUD on GitHub
// Title: Authentication
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/12.%20User%20Auth/BuildMe1_intro.md

      router.post('/updateBasicInfo', async (req, res) => {
        const { userId, college, highschool } = req.body;
      
        try {
          let user = await User.findById(userId);
      
          user.college = college;
          user.highschool = highschool;
      
          user = await user.save();
      
          res.status(200).json({ message: 'Basic information updated successfully', user });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server Error' });
        }
      });

      // Form Data To Mongodb Review
      // OpenAI. (n.d.). How to Build a Website with Node.js and Express [Video file]. 
      // Retrieved from https://www.youtube.com/watch?v=4sTmSlZDGow
      // https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFlHSDBSSnJSU0hiZTd0MENFZUFwX1oxVzc5QXxBQ3Jtc0ttWnpPNnpRZWhfX2pEbUFmNkhpYWdINklsSFBPV3ZqN3VUVUJvTGJVNVhHNS1sd3ZXMkZaRWxJc2JOME8tM2J2YW5BdWhNVExjSnQyUkdRVjRJTFlBaFRhUjJhaW9BVHlzT2ZyY0tMWG9xb3gyNFAwWQ&q=https%3A%2F%2Fopenjavascript.info%2F2023%2F03%2F13%2Freceive-form-data-in-node-js-with-and-without-files%2F&v=4sTmSlZDGow

// Source: Xano. (n.d.). Xano - The No Code Backend Platform. Retrieved from https://www.xano.com

// Authors: Justin White, Andrew DeitrickBillie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md
    
// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// // Source: YouTube
// URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: EJS Partials on GitHub
// Title: CRUD with Mongosh
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/3.%20CRUD%20with%20Mongosh.md

// Authors: Justin White, Andrew DeitrickBillie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST APIs and CRUD on GitHub
// Title: Authentication
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/12.%20User%20Auth/BuildMe1_intro.md



router.post('/updatePost', async (req, res) => {
        const { postId, postTitle, postContent, postImage, postDate } = req.body;
      
        try {
          let post = await Post.findById(postId);
      
          post.postTitle = postTitle;
          post.postContent = postContent;
          post.postImage = postImage;
          post.postDate = postDate;
      
          post = await post.save();
      
          res.status(200).json({ message: 'Post updated successfully', post });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server Error' });
        }
      });

//       // Form Data To Mongodb Review
//       // OpenAI. (n.d.). How to Build a Website with Node.js and Express [Video file]. 
//       // Retrieved from https://www.youtube.com/watch?v=4sTmSlZDGow
//       // https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFlHSDBSSnJSU0hiZTd0MENFZUFwX1oxVzc5QXxBQ3Jtc0ttWnpPNnpRZWhfX2pEbUFmNkhpYWdINklsSFBPV3ZqN3VUVUJvTGJVNVhHNS1sd3ZXMkZaRWxJc2JOME8tM2J2YW5BdWhNVExjSnQyUkdRVjRJTFlBaFRhUjJhaW9BVHlzT2ZyY0tMWG9xb3gyNFAwWQ&q=https%3A%2F%2Fopenjavascript.info%2F2023%2F03%2F13%2Freceive-form-data-in-node-js-with-and-without-files%2F&v=4sTmSlZDGow
// // Source: Xano. (n.d.). Xano - The No Code Backend Platform. Retrieved from https://www.xano.com

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: EJS Partials on GitHub
// Title: CRUD with Mongosh
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/3.%20CRUD%20with%20Mongosh.md

// Authors: Justin White, Andrew DeitrickBillie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST APIs and CRUD on GitHub
// Title: Authentication
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/12.%20User%20Auth/BuildMe1_intro.md

// // Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// // Author: The Net Ninja
// // Source: YouTube
// URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt


router.post('/updateAccountInfo', async (req, res) => {
  const { accountName, location, lastUpdate } = req.body;

  try {
      // Assuming you have a logged-in user and their ID is available in req.user
      const userId = req.user.id;

      // Update the user's account information in the database
      await User.findByIdAndUpdate(userId, { accountName, location, lastUpdate });

      res.send('Account information updated successfully.');
  } catch (error) {
      console.error('Error updating account information:', error);
      res.status(500).send('Internal server error.');
  }
});

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: EJS Partials on GitHub
// Title: CRUD with Mongosh
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/3.%20CRUD%20with%20Mongosh.md

// Authors: Justin White, Andrew DeitrickBillie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST APIs and CRUD on GitHub
// Title: Authentication
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/12.%20User%20Auth/BuildMe1_intro.md


// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// // Source: YouTube
// URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt


// Authors: Justin White, Andrew DeitrickBillie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md
// // // // PROFILE
// // // router.get('/profile', (req , res) => {
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
*    Author: Billie Heidelberg, Justin White Andrew Deitrick
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
