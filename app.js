const express = require('express');
const userRouter = require('./routers/user_route')
const dotenv = require('dotenv');
dotenv.config()
const connectToDB = require('./config/db')
connectToDB()
const cookieParser = require('cookie-parser');
const indexRouter = require('./routers/index.route')


const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use('/', indexRouter);

app.use('/user', userRouter);

app.listen(3000, ()=>{
    console.log("running in 3000 port");
})