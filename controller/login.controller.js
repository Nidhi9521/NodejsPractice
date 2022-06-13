var express = require('express');

var router=express.Router();

const jwt= require('jsonwebtoken');

const config=require("../authentication/global.config");

router.post('/',(req,res)=>{

    let userdata={
        username:req.body.username,
        password:req.body.password
    };

    let token=jwt.sign(userdata,config.secretKey,{
        algorithm:config.algorithm,
        expiresIn:"1d"
    });

    if(userdata.username=="admin" && userdata.password=="admin"){
        res.status(200).json({message:"login successfull",jwttoken:token});
    }else{
        res.status(400).json({message:"login fail"});
    }

})

module.exports=router;