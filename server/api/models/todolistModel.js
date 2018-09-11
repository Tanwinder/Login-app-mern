const mongoose = require('mongoose');

const todolistSchema = mongoose.Schema({
    name: { type: String, required: true}
});

module.exports = mongoose.model('todolist', todolistSchema);