const fs=require('fs');
const student=require('../json/student.json')


class StudentDomain{

    getAllStudent(req,res){
       
            res.send(student)
        
    }

    getAnStudent(req,res){
        // fs.readFile(student,'utf8',function(err,data){
        //     // const a= data.find((c)=>c.id==req.params.id);
        //     console.log(req.params.id);
        //     console.log(data);
        //     res.send(data);
        // })
        console.log(req.params.id);
        var c=student.find((a)=>a.id==req.params.id);
        res.send(c);
    }
}

module.exports=StudentDomain;