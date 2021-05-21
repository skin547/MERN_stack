let jwt = require("jsonwebtoken");
let config = require("../config");
let userService = require("../services/userService");
let bcrypt = require("bcrypt");

let secretKey = config.secretKey;

const sign = (user , key = secretKey ) => {
	let options = {
		expiresIn : 60 * 60
	}
	let token = jwt.sign( { username : user.username, password : user.password }, key, options ) ;
	return token ;
}

const verify = async ( token, user, key = secretKey ) => {
	let verify_token = jwt.verify( token, key );
	console.log( verify_token );
	console.log( user );
	return await bcrypt.compare( user.password, verify_token.password ) ;
}

module.exports.sign = sign;
module.exports.verify = verify;








//========================

const test_jwt = async ( login_user ) => {
	let user = await userService.signUp( "test_user", "passwordddd" ) ;
		
	console.log( `user : ${user.username} is register...` ) ;
	
	let token = sign( user ) ;

	console.log( `sign token to user : ${user.username}` ) ;
	console.log( "-------------token-------------") ;
	console.log( token ) ;
	console.log( "-------------------------------") ;

	console.log( `user : ${login_user.username} is login ` ) ;
	console.log( `now verify ${login_user.username}'s token ` ) ;
	let result = verify( token, login_user ) ;
	
	console.log( `verify result ${result} ---> login ${ result ? "successful" : "fail"  }\n\n` ) ;
}

let login_user = {
	username : "test_user",
	password : "passwordddd",
}


let fake_user = {
	username : "fake_user",
	password : "fakePassworddd",
}

// test_jwt( login_user ) ;

// setTimeout( test_jwt, 3000, fake_user );
