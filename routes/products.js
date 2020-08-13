const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/authMiddleware');
const { asyncErrorHandler } = require('../middlewares/asyncErrorHandler');

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controlers/products');

/**
 * @route   GET /api/products
 * @desc    Get All products
 * @access  Public
 */
router.get('/', asyncErrorHandler(getProducts));

/**
 * @route   POST /api/products
 * @desc    Create a product
 * @access  Private: Admin
 */
router.post('/', isAdmin, asyncErrorHandler(createProduct));

/**
 * @route   PUT /api/products/:id
 * @desc    Update a product
 * @access  Private: Admin
 */
router.put('/:id', isAdmin, asyncErrorHandler(updateProduct));

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete a product
 * @access  Private: Admin
 */
router.delete('/:id', isAdmin, asyncErrorHandler(deleteProduct));

module.exports = router;
