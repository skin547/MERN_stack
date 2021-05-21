let shortid = require('shortid');
let urlValidator = require("../util/urlValidator");
let shortenUrlModel = require('../models/shortenUrlModel');

exports.createUrl = async ( url ) => {
    try {
        let urlIsValid = urlValidator.validate(url);

        if( !urlIsValid ){
            throw new Error( 'url not valid' ) ;
        }

        let shortenUrlInstance = new shortenUrlModel( {
                    url : url,
                    shortId : shortid.generate() 
            } );

        await shortenUrlInstance.save() ;
        
        return ( { URL : "localhost:8000/urls/" + shortenUrlInstance.shortId,
                   message : "Shorten URL Successful" } ) ;
    } catch ( error ) {
        if( error.code === 11000 ) { // errmsg: E11000 duplicate key error collection
            urlInstance = await this.searchByUrl( url ) ;

            return ( { URL : "localhost:8000/urls/" + urlInstance.shortId,
                       message : "URL already exists" } ) ;
        } else {
            return ( { "error" : error.message } );
        }
    }
};

exports.listUrl = async ( ) => {
    result =  await shortenUrlModel.find();
    return result ;
};

exports.searchByShortId = async (shortId) => {
    await shortenUrlModel.findOne( {shortId : shortId} )
        .exec()
        .then((item) => {
            console.log(item);
            if( item == null ){
                result = { "error" : 'url not found' } ;
            } else {
                result = item;
            }
        })
        .catch( err => {
            console.log(err);
            result = { "error" : err.message } ;
        } )
        return result;
};

exports.remove = async (req, res) => {
    await shortenUrlModel.deleteOne( {_id: req.params.id}, (err) => {
        if( err ) console.log(err);
    })
    res.status(200).send('remove success');

}

exports.searchByUrl = async ( url ) => {
    urlInstance = await shortenUrlModel.findOne( { url: url } )
        .exec()
        .catch( error => console.log( error ) );

    return urlInstance;
}