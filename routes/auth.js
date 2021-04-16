const express =require('express');
const { auth } = require('../middleware/auth'); 

const router = express.Router();

router.post('/',auth,(req,res,next)=>{
    res.status(200).json({
        _id: req.user._id,
        name: req.user.name,
        role: req.user.role,
        isAuth: true,
        email:req.user.email
    })
})

module.exports = router;