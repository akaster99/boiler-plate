const express= require('express');
const {auth} = require('../middleware/auth');
const User = require('../schemas/user');

const router = express.Router();

router.post('/',auth, async (req,res,next)=>{
    try{
        await User.findOneAndUpdate({_id: req.user.id},{token:''});
        res.status(200).json({
            success: true,
        });
    }catch(err){
        console.error(err);
        return next(err);
    }
})
module.exports = router;
