let todoModel = require("../models/todoModel");

exports.list = async (req, res) => {
    await todoModel.find( (err, data) => {
        if( err ) console.log(err);
        res.json( data );
    })
}

exports.searchById = async (req, res) => {
    await todoModel.find( {_id:req.params.id})
        .exec()
        .then((data) => {
            res.json(data);
        })
        .catch( err => res.status(404).json({result:"Not found"}))
}

exports.create = async (req, res) => {
    let todoInstance = new todoModel({
        // title:req.body.title,
        date:new Date(),
        content:req.body.content,
        progress:'Todo'
    })

    await todoInstance.save( (err) => {
        if(err) console.log(err);
    } );
    res.status(201).send("success");
}

exports.update = async (req, res) => {
//   const { error } = validateProduct(req.body); 
//   if (error) return res.status(400).send(error.details[0].message);

//   const product = await Product.findById(req.params.id).exec();
//   if (!product) return res.status(404).send('The product with the given ID was not found.');

//   let query = {$set: {}};
//   for (let key in req.body) {
//     if (product[key] && product[key] !== req.body[key]) // if the field we have in req.body exists, we're gonna update it
//        query.$set[key] = req.body[key];

//   const updatedProduct = await Product.updateOne({_id: req.params.id}, query}).exec();

//   res.send(product);

    let result = await todoModel.updateOne( {_id:req.params.id} , 
        {
            date: new Date(),
            content: req.body.content,
            progress: req.body.progress
        }
    )
    console.log(result);
    res.send("OK");
}

exports.remove = async (req, res) => {
    await todoModel.deleteOne( {_id: req.params.id}, (err) => {
        if( err ) console.log(err);
    })
    res.status(204).send("OK");
}