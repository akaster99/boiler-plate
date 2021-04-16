const User = require('../schemas/user');
const jwt = require('jsonwebtoken');


const auth = async (req,res,next)=>{
    try{
        const token = req.cookies.x_auth;
        decoded = jwt.verify(token, process.env.JWT_SECRET);
        user =  await User.findOne({"_id":decoded.id,"token":token })
        if(!user){
            res.json({isAuth: false, error:true});
        }
        req.token = token;
        req.user = user;
        next();
    }catch(err){
        console.error(err);
        next(err);
    }
};

module.exports = {auth};