const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');
const TodoList = require('./api/routes/todolist');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/todolist', TodoList);

app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;