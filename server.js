const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const routes = require('./routes');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SET the Views Directory
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Passport middleware 
app.use(passport.initialize());

// Load Passport configuration
require('./config/passport')(passport);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


  app.get('/create-post', (req, res) => {
    res.render('create-post');
});

// Define a route to handle the form submission and create a new blog post
app.post('/create-post', (req, res) => {
    // Code to handle form submission and create a new blog post
    const { title, content } = req.body;
    // Code to save the blog post to the database or perform other actions
    // Here we'll just log the submitted data
    console.log('Submitted Blog Post:', { title, content });
    res.redirect('/create-post');
});

  // Define a route to handle the POST request for creating a blog post
app.post('/create-post', (req, res) => {
  res.status(404).send("Cannot POST /create-post");
});

// Use routes
app.use('/', routes);



// Define port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => { 
  console.log(`SocialSync Is Up & Running on port ${PORT}`);
});
