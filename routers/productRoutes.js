const express = require('express');
const productRouter = express.Router();
const { getAllProducts, getProductById,addProduct,deleteProductById } = require('../controller/ProductController');

// GET /products - Fetch all products
productRouter.get('/', getAllProducts);

// GET /products/:id - Fetch product details by ID
productRouter.get('/:id', getProductById);

//POST /product - Add a New Product
productRouter.post('/',addProduct)

// DELETE /products/:id - Fetch product details by ID
productRouter.delete('/:id', deleteProductById);

module.exports = productRouter;
