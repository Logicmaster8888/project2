
// Import required modules
const dotenv = require("dotenv").config(); // Fruits
const path = require('path'); // Fruits
const express = require('express'); // Fruits
const app = express(); // Express APP Good to Go!
// const bodyParser = require('body-parser');

const multer = require('multer');



// Models
// -------------------------------------------------------------------------------
const mongoose = require('mongoose');
const BasicInfo = require('./models/BasicInfo');
const BlogPost = require('./models/BlogPost');
const AccountInfo = require('./models/AccountInfo.js')
const ContactInfo = require('./models/ContactInfo');
const EducationInfo = require('./models/EducationInfo');
const Status = require('./models/Status');
const PInfo = require('./models/PInfo.js');




const bodyParser = require('body-parser');
// const {
//     AccountInfo,
//     BasicInfo,
//     ContactInfo,
//     EducationInfo,
//     BlogPost
//  } = require('./models');

// SERVER ROUTES
app.use('/', require('./routes/blogRoutes'));
// const blogRoutes = require('./routers/blogRoutes');

// Set port
const PORT = process.env.PORT || 9000; // PORT defined as 9000; Fruits 
const methodOverride = require('method-override'); // Fruits
const morgan = require('morgan'); // Fruits
const session = require('express-session');
app.use(express.json());
// app.use(bodyParser.json());

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

const storage = multer.diskStorage ({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
})

const upload = multer({ storage: storage });

app.post('/api/BlogPost', upload.single('postImage'), async (req, res) => {
    try {
        const newPost = await BlogPost.create({
            postTitle: req.body.postTitle,
            postContent: req.body.postContent,
            postImage: req.file ? req.file.path : '',
            postDate: req.body.postDate 
        });
        res.status(201).json(newPost);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});

// BLOG POST POST FORM SUBMISSION
// // ---------------------------------------------------------------------------------------
app.post('/save-post', (req, res) => {
    const { title, content, author, date } = req.body;

    const newPost = new BlogPost({
        title,
        content,
        author,
        date: new Date(date) // Assuming date is in ISO format
    });

    newPost.save()
        .then(() => {
            res.status(200).json({ message: 'Post saved successfully' });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});


// -------------------------------------------------------------
// Import models // GOOD 
// const Blog = require('./models/blogPosts');
const index = require('./models/index');
const login = require('./models/login');
const profile = require('./models/PInfo.js');
const user = require('./models/user');
const { TopologyDescription } = require("mongodb");
// const mongoose = require('mongoose'); // DATABASE TO MONGODB CONNECTION 
// Initialize Express app

// // ---------------------------------------------------------------------------------------
// CONNECT to MONGODB using the DB_URL
// mongoose.connect('mongodb+srv://logicmast.mohcynn.mongodb.net/Node_crud', {});// Assign the DB_URL
// const DB_URL = process.env.DB_URL;
//  // keeps my URL Hidden er8888:7CzpIKnuduOn7lnH@cluster0

// // Get the default connection
// const db = mongoose.connection;
// // Event listener for DB connection error
// db.on('error', (error) => console.error('Error connecting to MongoDB:', error));
// // Event listener for DB connection success
// db.once('open', () => console.log('Connected to the local database!'));


// MONGOOSE CONNETION 
// // ---------------------------------------------------------------------------------------
mongoose.connect('mongodb+srv://logicmaster8888:7CzpIKnuduOn7lnH@cluster0.mohcynn.mongodb.net/Node_crud?2retryWrites=true%w=majority')
.then(() => {
    console.log("Connected to database");
})
.catch((err) => {
    console.log("Connection failed!, err");
});


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

// app.get('/blogs', (req, res) => {
//     res.json(blogs); 
//   });
 
//PROFILE POST
app.post('/api/Profiles', async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// ACCOUNT POST
  app.post('/api/AccountInfo', async (req, res) => {
    try {
        const accountInfo = await AccountInfo.create(req.body);
        res.status(200).json(accountInfo);
    }catch (error) {
        res.status(500).json({ message: error.message});
    }
  });

  // CONTACT POST
  app.post('/api/ContactInfo', async (req, res) => {
    try {
        const contactInfo = await ContactInfo.create(req.body);
        res.status(200).json(contactInfo);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
  });

  // BASIC POST
  app.post('/api/BasicInfo', async (req, res) => {
    try {
        const BasicInfo = await BasicInfo.create(req.body);
        res.status(200).json(BasicInfo);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});

// EDUCATION POST
  app.post('/api/EducationInfo', async (req, res) => {
    try {
        const educationInfo = await EducationInfo.create(req.body);
        res.status(200).json(educationInfo);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
  });

  // BLOG POST POST
//   app.post('/api/BlogPost', async (req, res) => {
//     try {
//         const blogPost = await BlogPost.create(req.body);
//         res.status(200).json(blogPost);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
//   });
app.post('/api/BlogPost', async (req, res) => {
    try {
        const { title, content, author, date } = req.body;
        const newBlogPost = new BlogPost({ title, content, author, date });
        const savedBlogPost = await newBlogPost.save();
        res.status(201).json(savedBlogPost);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
});


// STATUS POST
  app.post('/api/Status', async (req, res) => {
    try {
        const status = await Status.create(req.body);
        res.status(200).json(status);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/PInfo', async (req, res) => {
    try {
        const PInfo = await PInfo.create(req.body);
        res.status(200).json(PInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// --------------------------------------------------------------------------------------------------
// Citation: 
// Line: 158 - 255
// "Build a REST API with Node.js, Express, and MongoDB" by Traversy Media. 
// YouTube, 5 April 2018. https://www.youtube.com/watch?v=_7UQPve99r4
// Github: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmljNHZjaHpVZ1A5akxTQklWTFMxUnJEbzQ0UXxBQ3Jtc0tsTUxBN1V5VnNQQVR5RnhETEo1c0Z5eU91QmxaQ183SHZSVXRmUDNVQXB5VmRLNVhJZTZpR3VQc0loUTNEYjkySjlJWXhpZmRYNnJiLURZVjAwNXRMTWktcDlVY0pWQXlMYWFJUFVST2wtaU1iUWo4OA&q=https%3A%2F%2Fgithub.com%2Fharis-bit%2Fsimple-crud-app-backend&v=_7UQPve99r4
// Date Accessed: 3/15 - 3-20
// --------------------------------------------------------------------------------------------------
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

app.get('/', (req, res) => {
    res.send('Hello from Social Sync App'); 
});


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

// // Title: Express Tutorial - EJS Layouts and Partials tutorial
// Author: The Net Ninja
// Source: YouTube https://www.youtube.com/watch?v=lYVKbAn5Od0
// Date: March - 5-15th
// ttps://github.com/RaddyTheBrand/Node...


// Title: MongoDB Tutorial for Beginners - Full Course in 3 Hours
// Author: freeCodeCamp.org 
// Source: YouTube https://www.youtube.com/watch?v=-PTtTy8YwQA
// Date: March - 5-15th

// Title: Creating a CRUD API with Node.js, Express, and MongoDB
// Author: Traversy Media 
// Source: YouTube https://www.youtube.com/watch?v=fgTGADljAeg
// Date: arch - 5-17th
// ttps://github.com/RaddyTheBrand/Node...


// Title: Build a REST API with Node.js, Express, and MongoDB
// Author: Traversy Media 
// Source: YouTube https://www.youtube.com/watch?v=ofme2o29ngU
// Date: Accessed on arch - 5-15th
// https://github.com/WebDevSimplified/Y...


// Title: Build A Restful Api With Node.js Express & MongoDB | Rest Api Tutorial
// Author: Code With Mosh https://www.youtube.com/watch?v=9OfL9H6AmhQ
// Source: YouTube
//  https://github.com/devtamin/Node-API
//  arch - 5-15th


// Title: JavaScript ES6 Modules
// Author: The Net Ninja
// Source: YouTube https://www.youtube.com/watch?v=H9M02of22z4&t=1510s
// https://github.com/dmalvia/Express_Mo...
// arch - 5-15th

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: Static ASSETS on GitHub (Note: I assumed this is part of the MVC and EJS lesson)
// Title: REST: CREATE
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/7.%20REST:%20New%20%2B%20Create%20Routes.md

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST: CREATE on GitHub
// Title: REST: DELETE
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/8.%20REST:%20Delete.md
// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST: DELETE on GitHub
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/10.%20EJS%20Partials.md

// Title: EJS Partials

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: EJS Partials on GitHub
// Title: CRUD with Mongosh
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/3.%20CRUD%20with%20Mongosh.md

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST APIs and CRUD on GitHub
// Title: Authentication
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/12.%20User%20Auth/BuildMe1_intro.md