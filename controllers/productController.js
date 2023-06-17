const productService = require('../services/productService');

exports.getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.json(products);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};
