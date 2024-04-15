
const { where } = require('sequelize');
const models = require('../models');

function create(req, res) {
   const postdata = {
        title : req.body.title,
        content : req.body.content,
        imageUrl : req.body.imageUrl,
        categoryId : req.body.categoryId,
        userId : 1
   }

   models.Post.create(postdata).then(result => {
        res.status(201).json({
            message : "Post save successfully.",
            status : 200,
            success : true,
            post: result
        });
   }).catch(error => {
    res.status(500).json({
        message : "Internal server error.",
        status : 500,
        success : false,
        error: error
    });
   });
}

function show (req,res) {
    const id = req.params.id;
    models.Post.findByPk(id).then(result => {
        res.status(200).json({
           
            status : 200,
            success : true,
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message : error,
            status : 500,
            success : true,
            
        });
    })
}

function index(req,res) {
    models.Post.findAll().then(result => {
        res.status(200).json({
            status : 200,
            data : result
        });
    }).catch(error => {
        res.status(500).json({
            status : 500,
            data : error
        });
    });
}

function update(req,res) {
    const id = req.params.id;
    const postdata = {
        title : req.body.title,
        content : req.body.content,
        imageUrl : req.body.imageUrl,
        categoryId : req.body.categoryId
        
   }
   const userId = 1;
    models.Post.update(postdata,{where: {id:id , userId:userId}}).then(result => {
        res.status(200).json({
            message : "Post update successfully.",
            status : 200,
            success : true,
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message : "Something went wrong.",
            status : 500,
            success : false,
            post: error
        });
    });
}

module.exports = {
    create:create,
    show:show,
    index:index,
    update:update
}