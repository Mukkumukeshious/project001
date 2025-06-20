const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/register', (req, res)=>
{
    res.render('register')
})

router.post('/register', 
    body('email').trim().isEmail(),
    body('password').trim().isLength({min:6}),
    body('username').trim().isLength({min:4}), 
    async(req, res)=>
{
    const error = validationResult(req);
    
    if(!error.isEmpty()){
        res.status(400).json({
            error:error.array(),
            messege:'invaild data'
        })
    }

    const { username, email, password} = req.body;
    const hashpassword = await bcrypt.hash(password, 10)
    const newUser = await userModel.create({
        username,
        email,
        password: hashpassword
    })
        res.json(newUser);
    

})

router.get('/login', (req, res)=>{
    res.render('login')
})

router.post('/login',
    body('username').trim().isLength({min:4}),
    body('password').trim().isLength({min:6}),
    async (req,res)=>{
    
        const error = validationResult(req);

        if(!error.isEmpty()){
            return res.status(400).json({
                error:error.array(),
                messege:'invalid data'
            })
        }

        const {username, password} = req.body;
        const user = await userModel.findOne({
            username:username
        })
        if(!user){
            return res.status(400).json({
                messege:'invalid credintail'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                messege:'invalid credintial'
            })
        }

        const token = jwt.sign({
            userId : user._id,
            email: user.email,
            username: user.username
        },
        process.env.JWT_SECRET,
    )
    res.cookie('Token', token)
    res.send('Loin Page') 
        
        
    }
 )

module.exports = router;