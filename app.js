const express = require('express');
const dotenv = require('dotenv');
dotenv.config();



const connect = require('./schemas');


const app = express();
const PORT = 3000;

connect();

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.listen(PORT, ()=>{
    console.log(PORT,'번 포트에서 대기 중');
})