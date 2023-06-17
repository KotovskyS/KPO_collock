module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.FLOAT,
        stock: DataTypes.INTEGER
    });

    return Product;
};
