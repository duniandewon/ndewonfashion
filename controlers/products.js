const Product = require('../models/Product');

module.exports = {
  getProducts: async (req, res) => {
    const products = await Product.find({});

    return res.json(products);
  },

  createProduct: async (req, res) => {
    const {
      name,
      description,
      price,
      image,
      category,
      gender,
      sizes,
      brand,
    } = req.body;

    if (!name) return res.status(400).json({ msg: "Name shouldn't be empty" });

    if (!description)
      return res.status(400).json({ msg: "Description shouldn't be empty" });

    if (!price)
      return res.status(400).json({ msg: "Price shouldn't be empty" });

    // if (!image)
    //   return res.status(400).json({ msg: "Image shouldn't be empty" });

    if (!category)
      return res.status(400).json({ msg: "Categoty shouldn't be empty" });

    if (!gender)
      return res.status(400).json({ msg: "Gender shouldn't be empty" });

    if (!sizes)
      return res.status(400).json({ msg: "Sizes shouldn't be empty" });

    if (!brand)
      return res.status(400).json({ msg: "Brand shouldn't be empty" });

    const newProduct = new Product({
      name,
      description,
      price,
      image,
      category,
      gender,
      sizes,
      brand,
    });

    const product = await newProduct.save();

    return res.json(product);
  },

  updateProduct: async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) return res.status(400).json({ msg: 'Product not found' });

    product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    return res.json(product);
  },

  deleteProduct: async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) return res.status(400).json({ msg: 'Product not found' });

    await Product.findByIdAndRemove(req.params.id);

    return res.json({ msg: 'Product deleted successfuly' });
  },
};
