const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders GET request done'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders POST request done'
    })
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'order detail GET request done',
        id: id
    })
});

router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'order DELETE request done',
        id: id
    })
});

module.exports = router;