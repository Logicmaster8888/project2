const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('./config/passport'); // Import the Passport instance
// const session = require('express-session'); // Import express-session for session support
const path = require('path');
const routes = require('./routes'); // Commented out the routes module
const User = require('./models/User'); // Import the User model

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SET the Views Directory
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Initialize express-session middleware
// app.use(session({
//   secret: 'secret', // Change this to a long random string in production
//   resave: false,
//   saveUninitialized: false
// }));

// Passport middleware 
app.use(passport.initialize());
// app.use(passport.session());

// Connect to MongoDB
mongoose.connect('mongodb+srv://logicmaster8888:Closertothesun24@cluster0.mohcynn.mongodb.net/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define route to render the index.ejs file as the landing page
app.get('/', async (req, res) => {
  try {
    // Render the index page with user as null
    res.render('index', { user: null }); // Assuming your index.ejs file is located in the views directory
  } catch (error) {
    console.error('Error rendering index page:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Define route to render the edit.ejs file
app.get('/edit', (req, res) => {
  try {
    // Render the edit page with user as null
    res.render('edit', { user: null }); // Assuming your edit.ejs file is located in the views directory
  } catch (error) {
    console.error('Error rendering edit page:', error);
    res.status(500).send('Internal Server Error');
  }
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

// Define route to render the blogpost.ejs file
app.get('/blogPost', (req, res) => {
  try {
    // Render the blogpost page with user as null
    res.render('blogPost', { user: null }); // Assuming your blogPost.ejs file is located in the views directory
  } catch (error) {
    console.error('Error rendering blogpost page:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Middleware for profile.ejs
app.get('/profile', async (req, res) => {
  try {
    // Your logic to fetch user profile data
    // const userProfile = await User.findById(req.user._id);
    // res.render('profile', { userProfile: userProfile });
    res.render('profile'); // Rendering without data for example
  } catch (error) {
    console.error('Error fetching user profile data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Middleware for redirect.ejs
app.get('/redirect', (req, res) => {
  // Your logic for the redirect page
  res.render('redirect');
});

//
// Middleware for login.ejs
app.get('/login', (req, res) => {
  res.render('login', { message: "Please login" }); // Pass "Please login" as the message
});



// // Use routes
// app.use('/auth', routes); // Assuming authentication routes are defined in routes module

// Define port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => { 
  console.log(`SocialSync Is Up & Running on port ${PORT}`);
});
