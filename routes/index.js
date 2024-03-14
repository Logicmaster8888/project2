// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(`Received a request on the root endpoint`);
  const message = `Welcome to our server! This is the root endpoint. You can explore different routes.`;
  res.send(message);
});

// router.get('/', (req, res) => {
//     // Assuming you have an index.ejs file in your views directory
//     res.render('index', { title: 'Homepage', message: 'Welcome to our server!' });
//   });

router.get('/edit', (req, res) => {
    console.log(`This is your edit profile page`);
  
    // Assuming 'user' contains user data retrieved from somewhere (e.g., a database)
    const user = {
      name: "John Doe",
      email: "john@example.com",
      location: "New York"
      // Add more user data properties as needed
    };
  
    res.render("edit", { 
      title: "Edit Your Profile", 
      message: "Edit your Profile", 
      user: user // Pass the 'user' object to the template
    });
  });

router.get("/home", (req, res) => {
  res.render("index", { title: "Homepage", message:"Welcome to Social Sync!"});
});

router.get("/Login", (req, res) => {
  res.render("Login", { title: "Login", message:"Please Login"});
});

router.get("/blogPost", (req, res) => {
  res.render("blogPost", { title: "Blog Post Page", message:"Post what you are thinking!"});
});

router.get("/profile", (req, res) => {
  res.render("profile", { title: "Your Profile", message:"Edit Your Profile"});
});

router.get("/redirect", (req, res) => {
  res.render("redirect", { title: "You're Being Redirected", message:"404 Error - You're Being Redirected"});
});

module.exports = router;
