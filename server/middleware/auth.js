const User = require('../schemas/user');
const jwt = require('jsonwebtoken');


const auth = async (req,res,next)=>{
    try{
        let token = req.cookies.x_auth;
        console.log(token)
        if(token !== undefined){
            decoded = jwt.verify(token, process.env.JWT_SECRET);
            user =  await User.findOne({"_id":decoded.id,"token":token })
        }else{
            user = false
        }
        if(!user){
            res.json({isAuth: false, error:true});
        }else{
            req.token = token;
            req.user = user;
            next()
        }
    }catch(err){
        console.error(err);
        next(err);
    }
};

module.exports = {auth};