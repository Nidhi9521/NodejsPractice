let jwt=require('jsonwebtoken');

const config=require('./global.config');

function verifytoken(req,res,next){

    var token=req.headers['token'];
    console.log(token);

    jwt.verify(token,config.secretKey,{
        algorithms:config.algorithm,
    },function (err,decoded){
        if(err){
            let errordata={
                message: err.message,
                exipreAt: err.exipreAt
            };
            return res.status(401).json({message:'Unauthrized'})
        }
        req.decoded = decoded;
        console.log(decoded);
        next();
    })

}
module.exports = verifytoken;
