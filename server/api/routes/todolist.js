const express = require('express');
const TodoList = require('../models/todolistModel');

const router = express.Router();

router.get('/', (req, res, next) => {
    TodoList.find()
    .exec()
    .then(data => {
        console.log(data);
        res.status(200).json({
            message: " Get items successfully",
            data: data
        })
    })
    .catch( err => console.log(err))
});

router.post('/', (req, res, next) => {
    TodoList
    .findOne({name: req.body.name})
    .then( result => {
       if( result !== null ) {
           res.status(201).json({
               message: 'Item is already present in database'
           })
       } else {
        const todolist = new TodoList({
            name: req.body.name
        });
        todolist
        .save()
        .then(data => {
            console.log(data);
            res.status(200).json({
                message: " Post items successfully",
                data: data
            })
        })
        .catch( err => console.log(err))
       }
    })
});

router.delete('/:id', (req, res, next) => {
    TodoList.remove({_id: req.params.id})
    .exec()
    .then(data => {
        console.log(data);
        res.status(200).json({
            message: " Delete items successfully",
            data: data
        })
    })
    .catch( err => console.log(err))
});

module.exports = router;