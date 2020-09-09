const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
  registerUser: async (req, res) => {
    const { name, username, email, password, isAdmin } = req.body;

    if (!name) return res.status(400).json({ msg: 'Please enter a name' });

    if (!username)
      return res.status(400).json({ msg: 'Please enter a username' });

    if (!email) return res.status(400).json({ msg: 'Please enter a email' });

    if (!password)
      return res.status(400).json({ msg: 'Please enter a password' });

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ msg: 'User with the same email already exists' });
      }

      user = new User({
        name,
        username,
        email,
        isAdmin,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const newUser = {
        name,
        username,
        email,
      };

      return res.json(newUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },
};
