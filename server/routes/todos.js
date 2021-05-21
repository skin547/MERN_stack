var express = require('express');
var router = express.Router();
let todoController = require('../controllers/todoController');

router.get('/', todoController.list);
router.get('/:id', todoController.searchById);
router.post('/',todoController.create);
router.patch('/:id', todoController.update);
router.delete('/:id',todoController.remove);

module.exports = router;
