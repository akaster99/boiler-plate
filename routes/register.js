const express = require('express');
const User = require('../schemas/user'); 


const router = express.Router();



router.post('/',(req,res)=>{
    const user = new User(req.body);
    user.save((err, userInfo)=>{
        if(err){
            return res.json({success: false, error: err});
        }
        return res.status(200).json({
            success: true
        })
    });

})


module.exports = router;