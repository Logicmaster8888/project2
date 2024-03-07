const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const usersRoutes = require('./routes/api/users');
const path = require('path');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// SET the Views Directory
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));


// SET EJS as the view engine
app.set("views", "./views");

// Passport middleware 
app.use(passport.initialize());

// Load Passport configuration
require('./config/passport')(passport);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define routes
app.get('/', (req, res) => {
  console.log(`Received a request on the root endpoint`);
  const message = `Welcome to our server! This is the root endpoint. You can explore different routes such as /cats for cat-related content or /pokemon to see a list of starter Pokémon.`;
  res.send(message);
})

app.get('/edit', (req, res) => {
  console.log(`This is your edit profile page`);
  res.render("edit", { title: "Edit Your Profile", message:"Edit your Profile"});
})

app.get("/home", (req, res) => {
  res.render("index", { title: "Homepage", message:"Welcome to Social Sync!"});
});

app.get("/Login", (req, res) => {
  res.render("Login", { title: "Login", message:"Please Login"});
});

app.get("/blogPost", (req, res) => {
  res.render("blogPost", { title: "Blog Post Page", message:"Post what you are thinking!"});
});

app.get("/profile", (req, res) => {
  res.render("profile", { title: "Your Profile", message:"Edit Your Profile"});
});

app.get("/redirect", (req, res) => {
  res.render("redirect", { title: "You're Being Redirected", message:"404 Error - You're Being Redirected"});
});

app.get('/jammy', (req, res) => {
  // res.send will send back 1 thing to the front end
  // console.log(`something`, `something else`);
  // res.send(berries);
  res.send(berries.join(', ') + ', YUM!');
})

app.get('/jammypokemon', (req, res) => {
  res.send({berries, starterPokemon})
})

// Define port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(5000, () => { 
  console.log(`SocialSync Is Up & Running`);
})
