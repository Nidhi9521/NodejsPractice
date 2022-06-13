const express=require('express');

const empModel=require('../model/employee');

class empDomain{


    async addData(req,res){

        var data={
            id:req.body.id,
            name:req.body.name
        };

        var d=new empModel(data);
        try{
        await d.save();
        res.send('Success');
        }catch(err){
            res.send(err.message);
        }

    }

}

module.exports=empDomain