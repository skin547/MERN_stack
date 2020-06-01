var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var config = require('./config');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let todosRouter = require('./routes/todos');
let shortenUrlRouter = require('./routes/shortenUrl');

let app = express();

mongoose.connect(config.mongodb.dev, {useNewUrlParser: true,useUnifiedTopology: true}, (err) => {
        if ( err ) {
             console.log( err );
        } else {
            console.log("Connect MongoDB SUCCESSFUL!");
        }
    }
).catch(err => console.log(err));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todos', todosRouter);
app.use('/urls', shortenUrlRouter);


module.exports = app;