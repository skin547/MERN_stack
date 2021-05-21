let shortenUrlModel = require('../models/shortenUrlModel');
let shortenUrlService = require('../services/shortenUrlService');

exports.create = async (req, res) => {
    result = await shortenUrlService.createUrl( req.body.url );
    res.status(201).json( result );
};

exports.list = async (req, res) => {
    let result = await shortenUrlService.listUrl() ;
    res.json( result ) ;
};

exports.search = async (req, res) => {
    let result = await shortenUrlService.searchByShortId( req.params.shortId ) ;
    console.log( result );
    res.redirect(result.url) ;
};

//TODO: refactor to services layer
exports.remove = async (req, res) => {
    await shortenUrlModel.deleteOne( {_id: req.params.id}, (err) => {
        if( err ) console.log(err);
    })
    res.status(200).send('remove success');

}

exports.searchUrl = async ( url ) => {
    urlInstance = await shortenUrlModel.findOne( { url: url } )
        .exec()
        .catch( error => console.log( error ) );

    return urlInstance;
}