const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const usersRoutes = require('./routes/api/users');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get('/cats', (req, res) => {
  console.log(`Jerry is torturing Tom`);
  res.send(`Jerry is Communicative`);
})


app.get('/pokemon', (req, res) => {
  res.send(starterPokemon);
})

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
