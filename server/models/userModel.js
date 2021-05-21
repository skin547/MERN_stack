let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema( {
    username: {
        type: String,
        required: 'URL can\'t be empty',
        unique: true
    },
    password: String,
    admin: Boolean },
    { timestamps : true } ) ;

module.exports = mongoose.model('user', userSchema);
