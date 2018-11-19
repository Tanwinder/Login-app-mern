const express = require('express');
const router = express.Router();
const Product = require('.././models/productModel');

router.get('/', (req, res, next) => {
    Product
    .find()
    .select('name price _id')
    .exec()
    .then( result => {
        console.log(result);
        res.status(200).json({
            message: 'fetch product successfully',
            products: result
        })
    })
    .catch( err => {
        console.log(err);
        res.status(500).json({error: err});
    })
});

router.post('/', (req, res, next) => {
    Product.findOne({name: req.body.name})
    .then( item => {
        if( item !== null ) {
            res.status(201).json({
                message: 'Item is already present in the database',
                newProduct: null
            })
        } else {
            const product = new Product({
                name: req.body.name,
                price: req.body.price
            });
        
            product
            .save()
            .then( result => {
                console.log(result);
                res.status(200).json({
                    message: 'save product successfully',
                    newProduct: result
                })
            })
            .catch( err => {
                console.log(err);
                res.status(500).json({error: err});
            })
        }
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'product detail GET request done',
        id: id
    })
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product
    .remove({ _id: id})
    .exec()
    .then( result => {
        res.status(200).json({
            message: "successfully deleted",
            id: result
        })
    })
    .catch( err => {
        res.status(500).json({
            error: err
        })
    })
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for ( let ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Product
    .update({_id: id}, {$set: updateOps})
    .exec()
    .then( result => {
        res.status(200).json({
            message: 'product detail PATCH request done',
            request: {
                type: 'GET',
                url: 'http://localhost:4000/products/' + result._id
            }
        })
    })
    .catch( err => {
        res.status(500).json({
            error: err
        })
    })
});

module.exports = router;