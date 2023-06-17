const express = require('express');
const app = express();
const productController = require('./controllers/productController');
const cartController = require('./controllers/cartController');
const orderController = require('./controllers/orderController');
const {sequelize} = require('./models/index');

sequelize.sync()
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });

app.use(express.json());

app.get('/products', productController.getProducts);
app.post('/cart', cartController.addToCart);
app.get('/cart/:userId', cartController.getCart);
app.post('/orders', orderController.createOrder);
app.get('/orders/:orderId', orderController.getOrder);

app.listen(3000, () => console.log('Server running on port 3000'));
