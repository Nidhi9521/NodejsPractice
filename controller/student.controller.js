const express=require('express');
const router=express.Router();
const StudentDomain=require('../domain/student.domain')

const fs=require('fs');

// router.get('/',(req,res)=>{
//     fs.readFile('json/student.json','utf-8',(err,data)=>{
//         res.send(data);
//     })
// })

class StudentController{

    static async getStudent(req,res){
        const studentDomain=new StudentDomain();
        studentDomain.getAllStudent(req,res);
    }

    static async getAnStudent(req,res){
        const studentDomain=new StudentDomain();
        studentDomain.getAnStudent(req,res);
    }

}

router.get('/',StudentController.getStudent);
router.get('/:id',StudentController.getAnStudent);
module.exports=router;