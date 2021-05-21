let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.get('/', userController.list );
router.get('/:id', userController.searchById );
router.post('/', userController.create );
router.delete('/:id', userController.remove );
router.post('/login', userController.login );
router.post('/authorize', userController.authorize );

module.exports = router;
