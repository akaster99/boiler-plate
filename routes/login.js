const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.post('/', async (req,res,next)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.json({
                loginSucess:false,
                message: "유저가 없습니다."
            });
        }
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(err){
                console.error(err);
                return next(err);
            }
            if(!isMatch){
                return res.json({
                    loginSucess:false,
                    message: "비밀번호가 틀립니다."
                });
            }
            user.generateToken((err, token)=>{
                if(err){
                    console.error(err);
                    return next(err); 
                }
                res.cookie("x_auth",token)
                .status(200)
                .json({
                    loginSucess:true,
                    userId: user._id,
                })
            });
        });
    } catch(err){
        console.error(err);
        return next(err);
    }
})

module.exports= router;