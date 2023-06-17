const Sequelize = require('sequelize');
// необходимо указать данные для бд.
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Cart = require('./Cart')(sequelize, Sequelize);
db.Order = require('./Order')(sequelize, Sequelize);
db.Product = require('./Product')(sequelize, Sequelize);

module.exports = db;
