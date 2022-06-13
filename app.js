let express=require('express');
const verifytoken = require('./authentication/verifytoken');
var student=require('./controller/student.controller');
let app=express();
const login=require('./controller/login.controller')
app.use(express.json());
const mark=require('./controller/marks.controller')
const emp=require('./controller/emp.controller');

app.use('/login',login);
app.use(verifytoken);
app.use('/student',student);
app.use('/emp',emp);
app.use('/marks',mark);
app.listen(3000,()=>{
    console.log("welcome");
})

