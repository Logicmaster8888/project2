// Import required modules
const dotenv = require("dotenv").config(); // Fruits
const path = require('path'); // Fruits
const express = require('express'); // Fruits
const app = express(); // Express APP Good to Go!



// SERVER ROUTES
app.use('/', require('./routes/blogRoutes'));
const blogPost = require('./models/blogPosts');

// const db = require('./models') // Fruits

// Set port
const PORT = process.env.PORT || 9000; // PORT defined as 9000; Fruits 
const methodOverride = require('method-override'); // Fruits
const morgan = require('morgan'); // Fruits
// const session = require('express-session');


// Import controllers
// const fruitsController = require('./controllers/fruitsController');
// const pokemonController = require('./controllers/pokemonController');
// const blogPostsController = require('./controllers/blogPostsController');
// const editProfileController = require('./controllers/editProfileController');
// const profileController = require('./controllers/profileController');
// const loginController = require('./controllers/loginController');
// const homeController = require('./controllers/homeController');

// Import models
// const fruits = require('./models/fruits');
// const pokemon = require('./models/pokemon');
// const blogPosts = require('./models/blogPosts');
// const profile = require('./models/profile');
// const mongoose = require('mongoose'); // DATABASE TO MONGODB CONNECTION 
// Initialize Express app

// // ---------------------------------------------------------------------------------------
// // CONNECT to MONGODB using the DB_URL
// mongoose.connect('mongodb+srv://logicmaster8888:Closertothesun24@cluster0.mohcynn.mongodb.net/');
// // Assign the DB_URL
// const DB_URL = process.env.DB_URL; // keeps my URL Hidden 

// // Get the default connection
// const db = mongoose.connection;
// // Event listener for DB connection error
// db.on('error', (error) => console.error('Error connecting to MongoDB:', error));
// // Event listener for DB connection success
// db.once('open', () => console.log('Connected to the local database!'));
// //--------------------------------------------------------------------------------------
//  Configure the app to refresh the browser when nodemon restarts
// -----------------

// const liveReloadServer = livereload.createServer();
// liveReloadServer.server.once("connection", () => {
//     //wait for nodemon to fully restart before refreshing the page
//     setTimeout(() => {
//         liveReloadServer.refresh("/");
//         }, 100);
// });
// //  Configure the app (app.set)
// --------------------------------------------------------------------------
// VIEWS ENGINE
app.set('view engine', 'ejs'); // Fruits
app.set('views', path.join(__dirname, 'views')); // Fruits


// app.use(session({
//     secret: 'my secret key',
//     saveUninitialized: true, 
//     resave: false,
// }));

// MIDDLEWARE - Use Store Message to Local 
// app.use((req, res, next) => { // Using Middleware to Store Message
//     res.locals.message = req.session.message;
//     delete req.session.message;
//     next(); 
// }); // Learn how to store with this !



// Middleware
app.use(morgan('tiny')); // Logging // Fruits
app.use(express.static('public')); // Serve static files // Fruits
app.use(express.json()); // Parse JSON requests  // Fruits
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data // Fruit
app.use(methodOverride('_method')); // Method override // Fruits
// app.use(connectLiveReload()); 

// Routes
// app.use(fruitsController); // Fruits routes
// app.use(pokemonController); // Pokemon routes
// app.use(blogPostsController);
// app.use(editProfileController);
// app.use(profileController);
// app.use(loginController);
// app.use(homeController);


const blogRouter = require('./routes/blogRoutes');
app.use('/blogRoutes', blogRouter);

// The "catch-all" route: Runs for any other URL that doesn't match the above routes
app.get('*', function (req, res) {
    res.render('404')
}); // Fruits

// Start the server
app.listen(PORT, () => { // callback V
    console.log("Social Media Sync IN SYNC!", PORT); // CALL BACK Console.log
});

    // CITATION 
/***************************************************************************************
*    Title: SEIR-Pixel-Pandas/Fruits
*    Author: Billie Heidelberg, Justin White, Andrew Deitrick
*    Date: 3-16/ 3-18/24
*    Code version: Latest 3/18
*    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
*
***************************************************************************************/
