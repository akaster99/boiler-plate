const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser'); 
const cors = require('cors');


dotenv.config();


const connect = require('./schemas');
const indexRouter = require('./routes');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const authRouter = require('./routes/auth');
const logoutRouter = require('./routes/logout');
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');
const app = express();
const PORT = process.env.PORT || 5000;

connect();
const corsOptions = {
    origin: "http://localhost:5000",
    credentials: true
  }
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/hello',apiRouter);
app.use('/api/register',registerRouter);
app.use('/api/login',loginRouter);
app.use('/api/auth',authRouter); 
app.use('/api/logout',logoutRouter);
app.use('/api/user',userRouter);
app.use('/',indexRouter);


app.use((req,res,next)=>{
    console.log('라우터 없음');
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err: {};
    res.status(err.status || 500);
    res.json({
        error: err,
    })
});


app.listen(PORT, ()=>{
    console.log(PORT,'번 포트에서 대기 중');
})