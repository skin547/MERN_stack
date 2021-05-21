let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let base64ImageSchema = new Schema({
    // base64ImageUrl: {
    //     type: Buffer,
    //     required: 'URL can\'t be empty',
    //     unique: true
    // },
    base64ImageUrl : Buffer,
    shortId : String,
});


module.exports = mongoose.model('base64Image', base64ImageSchema);
