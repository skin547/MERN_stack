let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let imageSchema = new Schema( {
    shortId: String,
    img: { path: String, contentType: String} }, 
    { timestamps: true }
);


module.exports = mongoose.model('Image', imageSchema);
