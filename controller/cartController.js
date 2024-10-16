const CartItem = require('../model/cartSchema');
const Product = require('../model/productSchema');

// Add product to cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  // Check if the product exists
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  try {
    const cartItem = new CartItem({ productId, quantity, userId: req.user._id });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get products in the cart
exports.getCartItem = async (req, res) => {
  try {

    const cartItems = await CartItem.find();
    res.status(200).json({ cartItems: cartItems, message:"Items are Fetched successfully." });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update product quantity in cart
exports.updateCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.findByIdAndUpdate(req.params.id, { quantity: req.body.quantity }, { new: true });
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove product from cart
exports.removeFromCart = async (req, res) => {
  try {
    const cartItem = await CartItem.findByIdAndDelete(req.params.id);
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
