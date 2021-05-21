let userModel = require("../models/userModel");
let userService = require("../services/userService");

exports.list = async ( req, res ) => {
    let result = await userService.list() ;
    res.json( result ) ;
}

exports.searchById = async (req, res) => {
    let result = await userService.searchById( req.params.id );
    res.json( result );
}

exports.create = async (req, res) => {
    let result = await userService.signUp( req.body.username, req.body.password );
    res.status(201).json( result );
}

exports.remove = async (req, res) => {
    let result = await userService.remove( req.params.id );
    res.json( result );
}

exports.login = async ( req, res ) => {
    let result = await userService.login( req.body.username, req.body.password );
    res.json( result ) ;
}

exports.authorize = async( req, res ) => {
    let result = await userService.authorize( req.body.token, req.body.username );
    res.json( result );
}