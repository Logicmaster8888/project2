// Import required modules
const dotenv = require("dotenv").config(); // 
const express = require('express');
const app = express(); // Express APP Good to Go!

// VIEWS ENGINE
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// SERVER ROUTES
app.use('/', require('./routes/blogRoutes'));


// Set port
const PORT = process.env.PORT || 9000; // PORT defined as 8000; 
const methodOverride = require('method-override');
const morgan = require('morgan');
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
app.use(morgan('tiny')); // Logging
app.use(express.static('public')); // Serve static files
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(methodOverride('_method')); // Method override

// Routes
// app.use(fruitsController); // Fruits routes
// app.use(pokemonController); // Pokemon routes
// app.use(blogPostsController);
// app.use(editProfileController);
// app.use(profileController);
// app.use(loginController);
// app.use(homeController);

// app.get("/api/blogs", (req, res) => {
//     res.json({message: "Get all blogs"});
// });

// app.get("/api/blogs", (req, res) => {
//     res.status(200).json({message: "Get all blogs"});
// });

// app.use("/api/blogs", require("./routes/blogRoutes"));

// Start the server
app.listen(PORT, () => { // callback V
    console.log("Social Media Sync IN SYNC!", PORT); // CALL BACK Console.log
});


// Citation
// Pokemon 

// Fruits App

// Citation Adding as we go and build out the application