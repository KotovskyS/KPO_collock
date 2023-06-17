const cartService = require('../services/cartService');

exports.addToCart = async (req, res) => {
    try {
        const {userId, productId, quantity} = req.body;
        const result = await cartService.addToCart(userId, productId, quantity);
        res.json(result);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.getCart = async (req, res) => {
    try {
        const userId = req.params.userId;
        const cart = await cartService.getCart(userId);
        res.json(cart);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};
