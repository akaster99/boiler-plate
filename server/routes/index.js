const express =require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('login API server 동작 중');
})

module.exports = router;