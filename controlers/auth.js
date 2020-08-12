const User = require('../models/User');
const passport = require('passport');

module.exports = {
  getloggedInUser: async (req, res) => {
    const { name, email } = await User.findById(req.session.passport.user);
    return res.json({ name, email });
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
        };

        return res.json(logedinUser);
      });
    })(req, res, next);
  },
};
