const mongooes=require('mongoose');
mongooes.connect("mongodb://localhost:27017/data",()=>{console.log('db');})

const empSchema=mongooes.Schema(
    {
        "id":{type:Number,required:true,unique : true },
        "name":{type:String,required:true,minlength:6},
    }
)

const empModel=mongooes.model("employees",empSchema);
module.exports=empModel;