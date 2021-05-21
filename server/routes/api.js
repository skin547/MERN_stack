let express = require('express');
let usersRouter = require('./users');
let todosRouter = require('./todos');
let shortenUrlRouter = require('./shortenUrl');
let imagesRouter = require('./images');

let router = express.Router();

router.use('/users', usersRouter);
router.use('/todos', todosRouter);
router.use('/urls', shortenUrlRouter);
router.use('/images', imagesRouter);

module.exports = router;
