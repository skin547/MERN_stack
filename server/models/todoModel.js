let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let TodoSchema = new Schema({
    title: String,
    date: Date,
    content: String,
    progress: String,
});


module.exports = mongoose.model('Todo', TodoSchema);
