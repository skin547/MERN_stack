let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let shortenUrlSchema = new Schema({
    url: {
        type: String,
        required: 'URL can\'t be empty',
        unique: true
    },
    shortId : String,
});


module.exports = mongoose.model('Url', shortenUrlSchema);
