const express = require('express')
const methodOverride = require('method-override');
const morgan = require('morgan');
// const fruitsController = require('./controllers/fruitsController');
// const pokemonController = require('./controllers/pokemonController');
// const Fruit = require('./models/fruits');
// const Pokemon = require('./models/pokemon');
const mongoose = require('mongoose')
const path = require('path')


const app = express();

// Controllers have to add the names and controllers to the name
const blogPost = require('./controllers/blogPostController')
const editProfile = require('./controllers/editProfileController')
const homeController = require('./controllers/homeController')
const newPostController = require('./controllers/newPostController')
const profileController = require('./controllers/profileController')
const searchController = require('/controllers/searchController')

// MODELS
const blogPosts = require('./models/blogPost')
const profile = require('./models/profile')

// MIDDLEWARES
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));

// App - USE
app.use(blogPostController);
app.use(editProfileController);
app.use(homeController);
app.use(newPostController);
app.use(profileController);
app.use(searchController);

// my code looks really good!
// the standard use of the codification.

// SET the Views Directory
app.set("view engine", "ejs");
// app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 5000;


// 
// Let's Clean it all up. 

// Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public')));

// Serve Bootstrap CSS file
// app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

// Serve Font Awesome CSS file
// app.use('/fontawesome', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/css')));

// Initialize express-session middleware
// app.use(session({
//   secret: 'secret', // Change this to a long random string in production
//   resave: false,
//   saveUninitialized: false
// }));

// Passport middleware 
// app.use(passport.initialize());
// app.use(passport.session());
// app.use('/', blogpostRouter);

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

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/edit-profile', (req, res) => {
  res.render('edit-profile');
});

app.get('/blogpost', (req, res) => {
  // Render the create-post page since you want /blogpost to go to create-post
  res.render('create-post');
});

app.get('/profile', (req, res) => {
  res.render('profile');
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

app.get('/about-us', (req, res) => {
  res.render('about-us');
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
// Define route to render the create-post.ejs file
app.get('/create-post', (req, res) => {
  try {
    // Render the create-post page with user as null
    res.render('create-post', { user: null }); // Assuming your create-post.ejs file is located in the views directory
  } catch (error) {
    console.error('Error rendering create-post page:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Define a route to handle the form submission and create a new blog post
app.get('/create-post', (req, res) => {
  try {
    // Assuming you have an array of blog posts named blogPosts
    const blogPosts = [
      {
        title: 'Sample Blog Post 1',
        content: 'This is the content of the first blog post.',
        image: 'path/to/image1.jpg'
      },
      {
        title: 'Sample Blog Post 2',
        content: 'This is the content of the second blog post.',
        image: 'path/to/image2.jpg'
      },
      // Add more blog posts as needed
    ];

    // Render the create-post page with blogPosts array
    res.render('create-post', { blogPosts: blogPosts }); // Pass blogPosts as an object property
  } catch (error) {
    console.error('Error rendering create-post page:', error);
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

app.get('/logout', (req, res) => {
  // Clear user session or authentication token
  // For example, if using session:
  req.session.destroy((err) => {
      if (err) {
          console.error('Error destroying session:', err);
      }
      res.redirect('/login'); // Redirect to the login page after logout
  });
});

// // Use routes
// app.use('/auth', routes); // Assuming authentication routes are defined in routes module



// Start server
app.listen(PORT, () => { 
  console.log(`SocialSync Is Up & Running on port ${PORT}`);
});
