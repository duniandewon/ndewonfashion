module.exports = {
  isAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }

    return res.status(401).json({ msg: 'Not Authorized!' });
  },

  isAdmin: (req, res, next) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      return next();
    }

    return res.status(401).json({ msg: 'Not Authorized!' });
  },
};
