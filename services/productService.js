const db = require('../models/index');
const Product = db.Product;

exports.getProducts = async () => {
    const products = await Product.findAll();
    return products;
};
