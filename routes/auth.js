const express = require('express');
const router = express.Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { asyncErrorHandler } = require('../middlewares/asyncErrorHandler');
const {
  loginUser,
  getloggedInUser,
  logoutUser,
} = require('../controlers/auth');

/**
 * @route   GET /api/auth
 * @desc    Get the logged in user
 * @access  Private
 */

router.get('/', isAuth, asyncErrorHandler(getloggedInUser));

/**
 * @route   POST /api/auth
 * @desc    Login the user
 * @access  Public
 */

router.post('/', loginUser);

/**
 * @route   GET /api/auth/logout
 * @desc    Logout user
 * @access  Private
 */

router.get('/logout', isAuth, logoutUser);

module.exports = router;
