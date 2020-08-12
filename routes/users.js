const express = require('express');
const router = express.Router();
const { registerUser } = require('../controlers/users');
const { asyncErrorHandler } = require('../middlewares/asyncErrorHandler');

/**
 * @route   POST /api/users
 * @desc    Register user
 * @access  Public
 */
router.post('/', asyncErrorHandler(registerUser));

module.exports = router;
