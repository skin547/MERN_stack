let userModel = require("../models/userModel");
let bcrypt = require("bcrypt");
let jwt = require("../util/jwt");

exports.list = async ( ) => {
    let result = await userModel.find();
    return result ;
}

exports.searchById = async (id) => {
    await userModel.findById( id )
        .exec()
        .then((data) => {
            result = (data);
        })
        .catch( err => result = { "error" : err.message } )
    return result;
}

exports.signUp = async (username, password) => {
    let hash = await bcrypt.hash( password, saltRounds = 10 );
    let user = {
        username: username,
        password: hash,
        admin: false
    }
    let userInstance = new userModel( user ) ;

    await userInstance.save( ( err ) => {
        if( err ) {
            console.log(err);
        }
    } );
    
    let token = jwt.sign( userInstance );

    let result = {
        username: username,
        token: token
    }
    return result;
}

exports.remove = async (id) => {
    await userModel.deleteOne( {_id: id}, (err) => {
        if( err ) return { "error" : err.message } ;
    })
    return { "result": "remove success"};
}

exports.login = async ( username, password ) => {
    let user = await userModel.findOne( { username : username } ) ;
    let login_result = await bcrypt.compare( password, user.password );
    return { "login_result": login_result } ;
}

exports.authorize = async ( token, username ) => {
    let user = await userModel.findOne( { username : username } ) ;
    let authorization = await jwt.verify( token, user );
    return { "result" : authorization };
}