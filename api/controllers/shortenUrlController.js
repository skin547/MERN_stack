let shortid = require('shortid');
let urlValidator = require('../util/urlValidator');
let shortenUrlModel = require('../models/shortenUrlModel');

exports.createUrl = async (req, res) => {
    try{
        let urlIsValid = urlValidator.validate(req.body.url);
        if( !urlIsValid ){
            res.status(406).send('url not valid');
            throw new Error('url not valid')
        }

        let shortenUrlInstance = new shortenUrlModel({
                    url:req.body.url,
                    shortId: shortid.generate()
                })
        await shortenUrlInstance.save( err => {if(err) console.log(err) } )
        res.send(shortenUrlInstance);
    }catch( error ){
        console.log(error);
    }
};

exports.listUrl = async (req, res) => {
    await shortenUrlModel.find()
        .exec()
        .then( (urls) => res.json(urls))
        .catch( err => console.log(err) );
};

exports.search = async (req, res) => {
    await shortenUrlModel.findOne( {shortId:req.params.shortId})
        .exec()
        .then((item) => {
            res.redirect(item.url);
        })
        .catch( err => {
            console.log(err);
            res.status(404).send("url not found");
        } )
};

exports.remove = async (req, res) => {
    await shortenUrlModel.deleteOne( {_id: req.params.id}, (err) => {
        if( err ) console.log(err);
    })
    res.status(200).send('remove success');

}