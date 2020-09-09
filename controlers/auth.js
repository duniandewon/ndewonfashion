const User = require('../models/User');
const passport = require('passport');

module.exports = {
  getloggedInUser: async (req, res) => {
    const { name, username, email } = await User.findById(
      req.session.passport.user
    );
    return res.json({ name, username, email });
  },

  loginUser: async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.status(400).json({ msg: 'Wrong username or password' });
      }

      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }

        const logedinUser = {
          email: user.email,
          name: user.name,
          username: user.username,
        };

        return res.json(logedinUser);
      });
    })(req, res, next);
  },

  logoutUser: (req, res) => {
    req.logout();
    return res.json({ msg: 'Logged out successfuly!' });
  },
};
