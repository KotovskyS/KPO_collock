module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        userId: DataTypes.INTEGER,
        status: DataTypes.STRING,
        totalCost: DataTypes.FLOAT
    });

    Order.associate = function (models) {
        Order.belongsToMany(models.Product, {
            through: 'OrderProduct',
            as: 'products',
            foreignKey: 'orderId',
            otherKey: 'productId'
        });
    };

    return Order;
};
