
const express=require('express');

const router=express.Router();
const empDomain=require('../domain/emp.domain')

class EmployeeController{

    static async postEmp(req,res){
        const EmpDomain=new empDomain();
        EmpDomain.addData(req,res);
    }

}

router.post('/data',EmployeeController.postEmp);

module.exports=router;