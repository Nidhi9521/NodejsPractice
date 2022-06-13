const express=require('express');
const router=express.Router();
const MarksDomain=require('../domain/marks.domain')
class MarksController{

    static async addData(req,res){
        const marksDomain=new MarksDomain();
        marksDomain.addData(req,res);
    }


    static async printData(req,res){
        const marksDomain=new MarksDomain();
        marksDomain.printData(req,res);
    }
}

router.post('/data',MarksController.addData);
router.get('/print/:id',MarksController.printData);
module.exports=router;


