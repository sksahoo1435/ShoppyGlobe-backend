const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // to connect the product with cart
  quantity: {type:Number},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // To link cart to a user
});

const cartItems = mongoose.model('CartItem', cartItemSchema);

module.exports = cartItems;
