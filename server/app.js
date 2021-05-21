const express          = require('express');
const path             = require('path');
const cookieParser     = require('cookie-parser');
const logger           = require('morgan');
const cors             = require('cors');
const mongoose         = require('mongoose');
const config           = require('./config');

const indexRouter      = require('./routes/index');
const apiRouter        = require('./routes/api');

const app = express();

mongoose.set('useCreateIndex', true)

mongoose.connect( 
    dbUrl = config.mongodb.dev, 
    {useNewUrlParser: true,useUnifiedTopology: true}, 
    (err) => {
        if ( err ) {
             console.log( err );
        } else {
            console.log(`Connect MongoDB ${dbUrl} SUCCESSFUL!`);
        }
    }
).catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
console.log( path.join(__dirname, './build') )

app.use('/', indexRouter);
app.use('/api', apiRouter);

// app.use(logger('dev'));
// app.use(cookieParser());

module.exports = app;