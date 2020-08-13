const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: [
    {
      type: String,
    },
  ],
  category: {
    type: 'String',
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  sizes: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('product', ProductSchema);
