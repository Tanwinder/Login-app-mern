const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'products GET request done'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'products POST request done'
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
    res.status(200).json({
        message: 'product DELETE request done',
        id: id
    })
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'product detail PATCH request done',
        id: id
    })
});

module.exports = router;