var express = require('express');
var router = express.Router();
let shortenUrlController = require('../controllers/shortenUrlController');

router.get('/', shortenUrlController.list);
router.get('/:shortId', shortenUrlController.search);
router.post('/', shortenUrlController.create);
router.delete('/:id', shortenUrlController.remove)

module.exports = router;
