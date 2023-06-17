const db = require('../models/index');
const Order = db.Order;
const Cart = db.Cart;
const Product = db.Product;

exports.createOrder = async (userId) => {
    const cart = await Cart.findOne({where: {userId: userId}, include: 'products'});

    if (!cart) {
        throw new Error('Cart not found');
    }

    let totalCost = 0;
    for (let i = 0; i < cart.products.length; i++) {
        totalCost += cart.products[i].price * cart.products[i].CartProduct.quantity;
    }

    const order = await Order.create({
        userId: userId,
        status: 'pending',
        totalCost: totalCost
    });

    await order.addProducts(cart.products);

    return order;
};

exports.getOrder = async (orderId) => {
    const order = await Order.findByPk(orderId, {include: 'products'});
    return order;
};
