const express = require('express');
const User = require('../schemas/user');
const {auth} = require('../middleware/auth');

const router = express.Router();

router.get('/All',auth, async (req,res,next)=>{
    try{
        const users = await User.find();
        res.status(200)
            .json({
                usersData: users
            })

    } catch(err){
        console.error(err);
        return next(err);
    }
})
router.get('/id/:_id',auth, async (req,res,next)=>{
    try{
        const user = await User.findOne({_id: req.params._id});
        res.status(200)
            .json({
                userData: user
            })

    } catch(err){
        console.error(err);
        return next(err);
    }
})
router.post('/update', async (req,res,next)=>{
    try{
        const response =  req.body.User;
        const user = await User.findOne({_id: response._id})
        user.name = response.name;
        user.role = response.role;
        user.email = response.email;
        user.password = response.password;
        const answer = await user.save();
        console.log("answer", answer);
        return res.status(200).json({
            success: true
        })

    } catch(err){
        console.error(err);
        return next(err);
    }
})
router.get('/delete/:_id', async (req,res,next)=>{
    try{
        const answer = await User.deleteOne({_id:req.params._id})
        console.log(answer)
        return res.status(200).json({
            success: true
        })

    } catch(err){
        console.error(err);
        return next(err);
    }
})

module.exports= router;