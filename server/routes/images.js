let express = require('express');
let router = express.Router();
let imageController = require('../controllers/imageController');

let multer = require('multer');

let storage = multer.diskStorage( {
    destination : function (req, file, cb) {
        let error;
        if ( file.mimetype !== 'image/jpeg' ) {
            error = new Error( "File format incorrect" );
        } else {
            error = null;
        }
        cb( null, 'uploads/' )
    },
    filename : function (req, file, cb) {
      cb( null, file.originalname );
    }
  })

let upload = multer( { storage: storage } ) ;

router.get( '/', imageController.listImages ) ;

router.get( '/:id', imageController.searchImageByShortId ) ;

router.post( '/', upload.single('file'), imageController.create ) ;

module.exports = router ;
