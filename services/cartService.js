const db = require('../models/index');
const Cart = db.Cart;
const Product = db.Product;

exports.addToCart = async (userId, productId, quantity) => {
    let cart = await Cart.findOne({where: {userId: userId}});
    if (!cart) {
        cart = await Cart.create({userId: userId});
    }

    const product = await Product.findByPk(productId);
    if (!product) {
        throw new Error('Product not found');
    }

    await cart.addProduct(product, {through: {quantity: quantity}});

    return cart;
};

exports.getCart = async (userId) => {
    const cart = await Cart.findOne({where: {userId: userId}, include: 'products'});
    return cart;
};
