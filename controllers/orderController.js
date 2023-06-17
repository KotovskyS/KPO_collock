const orderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
    try {
        const userId = req.body.userId;
        const order = await orderService.createOrder(userId);
        res.json(order);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.getOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const order = await orderService.getOrder(orderId);
        res.json(order);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};
