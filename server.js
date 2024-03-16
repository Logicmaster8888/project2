// Import required modules
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');

// Import controllers
const fruitsController = require('./controllers/fruitsController');
const pokemonController = require('./controllers/pokemonController');
const blogPostsController = require('./controllers/blogPostsController');
const editProfileController = require('./controllers/editProfileController');
// Import models
const fruits = require('./models/fruits');
const pokemon = require('./models/pokemon');
const blogPosts = require('./models/blogPosts');
const profile = require('./models/profile');

// Initialize Express app
const app = express();

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// Set port
const PORT = process.env.PORT || 8000;

// Middleware
app.use(morgan('tiny')); // Logging
app.use(express.static('public')); // Serve static files
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(methodOverride('_method')); // Method override

// Routes
app.use(fruitsController); // Fruits routes
app.use(pokemonController); // Pokemon routes
app.use(blogPostsController);
app.use(editProfileController);

// Start the server
app.listen(PORT, () => {
    console.log("Their power level is over", PORT);
});
