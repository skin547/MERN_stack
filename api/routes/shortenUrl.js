var express = require('express');
var router = express.Router();
let shortenUrlController = require('../controllers/shortenUrlController');

router.get('/', shortenUrlController.listUrl);
router.get('/:shortId', shortenUrlController.search);
router.post('/',shortenUrlController.createUrl);
router.delete('/:id', shortenUrlController.remove)

module.exports = router;
