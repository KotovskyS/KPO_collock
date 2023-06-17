module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
        userId: DataTypes.INTEGER
    });

    Cart.associate = function (models) {
        Cart.belongsToMany(models.Product, {
            through: 'CartProduct',
            as: 'products',
            foreignKey: 'cartId',
            otherKey: 'productId'
        });
    };

    return Cart;
};
