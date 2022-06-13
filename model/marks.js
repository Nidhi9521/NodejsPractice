const mongooes=require('mongoose');
const empModel=require('./employee')
mongooes.connect("mongodb://localhost:27017/data",()=>{console.log('db');})

const markSchema=mongooes.Schema(
    {
        "id":{type:Number,required:true},
        "sid":{type:mongooes.Schema.Types.ObjectId,required:true,unique : true ,ref:empModel},
        "grade":{ type: String, enum: ["A", "B","C"]},
    }
)

const marksModel=mongooes.model("marks",markSchema);
module.exports=marksModel;