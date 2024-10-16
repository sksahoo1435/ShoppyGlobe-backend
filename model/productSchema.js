const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: {
        type: Number,
        min: [0, 'Price cannot be negative'] 
    },
    description: String,
    stockQuantity: {
        type: Number,
        min: [0, 'Stock quantity cannot be negative']
    },
});

const Products = mongoose.model('Product', productSchema);

module.exports = Products;
