const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User'); // Assuming User model is defined in User.js

module.exports = function(passport) {
  passport.use(new LocalStrategy({
    usernameField: 'email', // Assuming email is used for login
    passwordField: 'password'
  }, (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false, { message: 'Incorrect email.' });
      // Validate password here, compare with hashed password stored in user object
      // Example: if (!user.validPassword(password)) { return done(null, false, { message: 'Incorrect password.' }); }
      // If password is correct, return the user object
      return done(null, user);
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
