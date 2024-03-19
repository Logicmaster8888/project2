
// Import required modules
const dotenv = require("dotenv").config(); // Fruits
const path = require('path'); // Fruits
const express = require('express'); // Fruits
const app = express(); // Express APP Good to Go!
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// SERVER ROUTES
app.use('/', require('./routes/blogRoutes'));
const blogPost = require('./models/blogPosts');
// const blogRoutes = require('./routers/blogRoutes');

// Set port
const PORT = process.env.PORT || 9000; // PORT defined as 9000; Fruits 
const methodOverride = require('method-override'); // Fruits
const morgan = require('morgan'); // Fruits
const session = require('express-session');

// const db = require('./models');
// --------------------------------------------------------------
// Import controllers // GOOD
// const blogController = require('./controllers/blog1');
// const isAuthenticatedController = require('./controllers/isAuthenticatedController');
// const loginController = require('./controllers/loginController');
// const profileController = require('./controllers/profile');
// const sessionController = require('./controllers/sessionController');
// const userController = require('./controllers/userController');

// app.use('/profile', profile');
// app.use('/sessions', sessionsController'); 
// Handles login and logout

// -------------------------------------------------------------
// Import models // GOOD 
const Blog = require('./models/blogPosts');
const index = require('./models/index');
const login = require('./models/login');
const profile = require('./models/profile');
const user = require('./models/user');
// const mongoose = require('mongoose'); // DATABASE TO MONGODB CONNECTION 
// Initialize Express app

// // ---------------------------------------------------------------------------------------
// CONNECT to MONGODB using the DB_URL
mongoose.connect('mongodb+srv://logicmaster8888:7CzpIKnuduOn7lnH@cluster0.mohcynn.mongodb.net/Node_crud', {});// Assign the DB_URL
const DB_URL = process.env.DB_URL;
 // keeps my URL Hidden 

// Get the default connection
const db = mongoose.connection;
// Event listener for DB connection error
db.on('error', (error) => console.error('Error connecting to MongoDB:', error));
// Event listener for DB connection success
db.once('open', () => console.log('Connected to the local database!'));
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
//  Configure the app (app.set)
// --------------------------------------------------------------------------
// VIEWS ENGINE
app.set('view engine', 'ejs'); // Fruits
app.set('views', path.join(__dirname, 'views')); // Fruits
// app.use(bodyParser.json()); // Fruits

app.get('/blogs', (req, res) => {
    res.json(blogs); 
  });
 

// app.use(session({
//     secret: 'my secret key',
//     saveUninitialized: true, 
//     resave: false,
// }));

// // MIDDLEWARE - Use Store Message to Local 
// app.use((req, res, next) => { // Using Middleware to Store Message
//     res.locals.message = req.session.message;
//     delete req.session.message;
//     next(); 
// }); // Learn how to store with this !

// const fruitsCtrl = require('./controllers/blog')


// app.use('/fruits', fruitsCtrl)

// Middleware
app.use(morgan('tiny')); // Logging // Fruits
app.use(express.static('public')); // Serve static files // Fruits
app.use(express.json()); // Parse JSON requests  // Fruits
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data // Fruit
app.use(methodOverride('_method')); // Method override // Fruits
// app.use(connectLiveReload()); 

// app.use('/blog/user', require('./routes/userRoutes'));
// app.use('.blog/profile', require('/routes/profile'));
// app.use('/blog/blogPosts', require('/routes/blogPosts'));
// app.use('/blog/index', require('/routes/index'));
// app.use('/blog/login', require('/routes/login'));
// app.use('/blog/profileSeed', require('/routes/profileSeed'));
// app.use('/blog/blogSeed', require('/routes/blogSeed'));

// app.use('/', require('./routes/blogRoutes'));
// Routes
// app.use(blog); // Blog Manager
// app.use(profile); // Profile Manager
// app.use(loginController); // Login Manager
// app.use(homeController); // Index Manager?

// app.use('/blog', blogRoutes);
// app.use("/blogPosts", require("./routes/blogRoutes"));
// app.use("/blog", require(".routes/blogRoutes"));

// const blogRouter = require('./routes/blogRoutes');
// app.use('/blogRoutes', blogRouter);

// // The "catch-all" route: Runs for any other URL that doesn't match the above routes
// app.get('*', function (req, res) {
//     res.render('404')
// }); // Fruits

// app.get('/', (res, req)=> {
//     res.send(console.log('hello'))
// })

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
