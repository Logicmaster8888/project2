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
const blogPostsController = require('./controllers/blogPostsController')
const editProfileController = require('./controllers/editProfileController')
const homeController = require('./controllers/homeController')
const newPostController = require('./controllers/newPostController')
const profileController = require('./controllers/profileController')
const searchController = require('./controllers/searchController')
const aboutController = require('./controllers/aboutController')

// MODELS
const blogPosts = require('./models/blogPosts')
const profile = require('./models/profile')
const login = require('./models/login')

// MIDDLEWARES
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));

// App - USE
app.use(blogPostsController);
app.use(editProfileController);
app.use(homeController);
app.use(newPostController);
app.use(profileController);
app.use(searchController);
app.use(aboutController);

// my code looks really good!
// the standard use of the codification.

// SET the Views Directory
app.set("view engine", "ejs");
// app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 5000;




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


// Middleware for redirect.ejs
// app.get('/redirect', (req, res) => {
//   // Your logic for the redirect page
//   res.render('redirect,ejs');
// });

//
app.get('/logout', (req, res) => {
  // Clear user session or authentication token
  // For example, if using session:
  req.session.destroy((err) => {
      if (err) {
          console.error('Error destroying session:', err);
      }
      res.redirect('/login.ejs'); // Redirect to the login page after logout
  });
});

// // Use routes
// app.use('/auth', routes); // Assuming authentication routes are defined in routes module


// Start server
app.listen(PORT, () => { 
  console.log(`SocialSync Is Up & Running on port ${PORT}`);
});
