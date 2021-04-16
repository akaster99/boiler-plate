const express =require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('안녕하세요');
})

module.exports = router;