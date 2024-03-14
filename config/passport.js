const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User'); // Assuming User model is defined in User.js
const bcrypt = require('bcrypt');

// Configure Passport.js
passport.use(new LocalStrategy({
  usernameField: 'email', // Assuming email is used for login
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return done(null, false, { message: 'Incorrect email or password.' });
    }
    // Validate password by comparing hashed password with provided password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return done(null, false, { message: 'Incorrect email or password.' });
    }
    // If password is correct, return the user object
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
