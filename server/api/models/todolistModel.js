const mongoose = require('mongoose');

const todolistSchema = mongoose.Schema({
    name: { type: String, required: true},
    isCompleted: {type: Boolean, default: false}
});

module.exports = mongoose.model('todolist', todolistSchema);