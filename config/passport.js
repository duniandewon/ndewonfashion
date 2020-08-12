const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const customFields = {
  usernameField: 'email',
  passwordField: 'password',
};

const varifyCallback = async (username, password, done) => {
  try {
    const user = await User.findOne({ email: username });

    if (!user) {
      return done(null, false);
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    done(err);
  }
};

const strayegy = new LocalStrategy(customFields, varifyCallback);

passport.use(strayegy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await User.findById(userId);

    done(null, user);
  } catch (err) {
    done(err);
  }
});
