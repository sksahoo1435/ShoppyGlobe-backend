const Product = require('../model/productSchema');

exports.addProduct = async (req, res) => {
  try {
    const { name, price, description, stockQuantity } = req.body;

    // Create a new product using the data from the request
    const newProduct = new Product({
      name,
      price,
      description,
      stockQuantity,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    // Send back the saved product as a response
    res.status(201).json({
      message: 'Product successfully added!',
      product: savedProduct,
    });
  } catch (error) {
    // If validation or other errors occur, send an appropriate response
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation error occurred',
        errors: error.errors,
      });
    }
    res.status(500).json({
      message: 'An error occurred while adding the product',
      error: error.message,
    });
  }
};


// Fetch all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product by ID
exports.deleteProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const products = await Product.findByIdAndDelete(req.params.id);
    res.json({product:products, message:"Product Deleted Successfully."});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};