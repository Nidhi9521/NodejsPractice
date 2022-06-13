const MarksController =require('../controller/marks.controller');

const empModel=require('../model/employee')
const marksModel=require('../model/marks')
class MarksDomain{

    async addData(req,res){
        var empRes=await empModel.findOne({id:req.body.sid});

        console.log(empRes._id);
        var data={
            id:req.body.id,
            sid:empRes._id,
            rade:req.body.grade
        }
        try{
            var d=new marksModel(data);
            d.save();
            res.send('Success')
        }catch (err){
            res.send(err)
        }
    }

    async printData(req,res){
        try{
        console.log(req.params.id);
        var data=await marksModel.find({id:req.params.id}).populate({
            path:'sid',model:'empModel'
        })
        console.log(data);
        res.send(data);
        }catch (e){
            res.send(e);
        }

    }
}

module.exports=MarksDomain;