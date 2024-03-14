const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('./config/passport'); // Import the Passport instance
const session = require('express-session'); // Import express-session for session support
const path = require('path');
const routes = require('./routes');
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
app.use(session({
  secret: 'secret', // Change this to a long random string in production
  resave: false,
  saveUninitialized: false
}));

// Passport middleware 
app.use(passport.initialize());
app.use(passport.session());

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
    // Check if user is authenticated
    if (req.isAuthenticated()) {
      const userId = req.user._id; // Assuming req.user contains the authenticated user's information
      const user = await User.findById(userId);
      // Render the index page with user data
      res.render('index', { user: user }); // Assuming your index.ejs file is located in the views directory
    } else {
      // Redirect to login page if not authenticated
      res.redirect('/auth/login');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Define route to render the edit.ejs file
app.get('/edit', async (req, res) => {
  try {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
      const userId = req.user._id; // Assuming req.user contains the authenticated user's information
      const user = await User.findById(userId);
      // Render the edit page with user data
      res.render('edit', { user: user }); // Assuming your edit.ejs file is located in the views directory
    } else {
      // Redirect to login page if not authenticated
      res.redirect('/auth/login');
    }
  } catch (error) {
    console.error('Error fetching user data for edit page:', error);
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

// Use routes
app.use('/auth', routes); // Assuming authentication routes are defined in routes module

// Define port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => { 
  console.log(`SocialSync Is Up & Running on port ${PORT}`);
});
