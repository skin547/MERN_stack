let shortId = require('shortid');
let path = require('path');
// let base64ImageModel = require('../models/base64Image');
let imageModel = require('../models/imageModel');

exports.listImages = async (req, res) => {
    await imageModel.find()
            .exec()
            .then( images => res.json(images))
            .catch( error => console.log(error) );
}

exports.searchImage = async ( req, res ) => {
    await imageModel.findById( req.param.id )
            .exec()
            .then( image => res.send( image[0].img ) )
            .catch( error => res.send( error ) );
    // let imageInstance = await imageModel.findById( req.param.id );
    // res.download( imageInstance.img.data );
    // res.download( "./uploads/7T7q3qSHS.jpg" );
}

exports.searchImageByShortId = async ( req, res ) => {
    console.log( "searching image: " + req.params.id );
    let folder_path = path.join( __dirname, "../" ) ;
    await imageModel.findOne( {shortId: req.params.id} )
            .exec()
            .then( image => res.sendFile( path.join( folder_path, image.img.path ) ) )
            .catch( error => res.send( error ) );
}

exports.create = async ( req, res ) => {
    let image = new imageModel( {
        shortId : shortId.generate(),
        img : {
            path : req.file.path,
            contentType : 'image/jpeg' }
    } ) ;
    await image.save() ;
    res.json( { message : 'New image added to the db!', shortId: image.shortId } ) ;
}


// exports.create = async (req, res) => {
//     try{
//         let imageInstance = new base64ImageModel({
//             base64ImageUrl: req.body.base64ImageUrl,
//             shortId : shortId.generate()
//         })

//         await imageInstance.save( (err) => {
//             if(err) console.log(err);
//         } );
//         res.send(imageInstance);
//     }
//     catch( error ) {
//         console.log(error);
//     }
// }