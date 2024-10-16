const express = require('express');
const cartRouter = express.Router();
const { addToCart, updateCartItem, removeFromCart,getCartItem } = require('../controller/cartController');

// POST /cart - Add product to cart
cartRouter.post('/', addToCart);

// GET /cart - get products of the cart
cartRouter.get('/', getCartItem);

// PUT /cart/:id - Update product quantity in cart
cartRouter.put('/:id', updateCartItem);

// DELETE /cart/:id - Remove product from cart
cartRouter.delete('/:id', removeFromCart);

module.exports = cartRouter;
