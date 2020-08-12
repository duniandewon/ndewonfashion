const express = require('express');
const router = express.Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { loginUser, getloggedInUser } = require('../controlers/auth');
const { asyncErrorHandler } = require('../middlewares/asyncErrorHandler');

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

module.exports = router;
