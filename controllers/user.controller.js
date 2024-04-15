const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('fastest-validator');
const { where } = require('sequelize');


function signUp(req, res) {
    models.User.findOne({where:{email:req.body.email}}).then(result => {
        if(result){

            res.status(400).json({
                message: "user already exists"        
            });
        }else{
            bcryptjs.genSalt(10, function (error, salt) {
                bcryptjs.hash(req.body.password, salt, function (error, hash) {
                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash,
                    }
                    const schema = {
                        email: { type: "string", optinal: false, max: "100" },
                        name: { type: "string", optinal: false, max: "100" },
                        password: { type: "string", optinal: false, max: "100" }
                    };
                    const v = new validator();
                    const validationRespone = v.validate(user, schema);
                    if (validationRespone !== true) {
                        return res.status(400).json({
                            message: 'validation error.',
                            errors: validationRespone
                        });
                    }
        
                    models.User.create(user).then(result => {
                        res.status(201).json({
                            message: 'user created successfully',
                            user: result
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: "something went wrong",
                            error: error
                        });
                    });
                })
            })
        }
    }).catch(error => {
         res.status(500).json({
            message: "something went wrong.",
            error : error   
        });
    });
   
}

function login(req,res) {
    models.User.findOne({where:{email:req.body.email}}).then(user => {
        if(user == null){
            res.status(401).json({
                message:"Invalid credentials"
            })
        }else{
            bcryptjs.compare(req.body.password, user.password , function(err , result){
                if(result){
                    const token = jwt.sign({
                        user:user
                    },'secret', function(err , token){
                        res.status(200).json({
                            message:"Authentication successful",
                            token : token
                        })
                    })
                }else{
                    res.status(401).json({
                        message:"Invalid credentials"
                    })
                }
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "something went wrong.",
            error : error   
        });
    });
    
}

async function test(req,res){
    //one to one
    //    const user = await models.User.findByPk(1,{
    //     include:[models.Address]
    //    });

    //one to many
   const user = await models.User.findByPk(1,{
    include:[models.Post]
   });
   console.log(user,'us____________________________');
    res.status(200).json({
        data : user
    });

}



module.exports = {
    signUp: signUp,
    login: login,
    test: test,
}