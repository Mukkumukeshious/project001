//cat-me package
// const catMe = require('cat-me');
// console.log(catMe())

//Server create
// const http = require('http')

// const server = http.createServer((req, res)=>{
//     // console.log(req.url)
//     // res.end("hello world")

//     if(req.url == "/about"){
//         res.end("the about page")
//     }
//     if(req.url == "/profile"){
//         res.end("the profile page")
//     }
//     if(req.url == "/login"){
//         res.end("the login  page")
//     }
//     if(req.url == "/"){
//         res.end("the home page")
//     }

// })
// server.listen(3000)


//express (for production level)

// const express = require('express');
// const app = express()

// app.set("view engine", 'ejs')

// app.use((req,res,next)=>{
//     console.log("this is middleware")
//     const a =2;
//     const b =3;
//     console.log(a+b)

//     return next()
// })
// app.get('/', (req,res)=>{
//     res.render('index')
// })
// app.get('/about', (req,res)=>{
//     res.send("Hello, this is about page")

// })

// app.get('/profile', (req,res)=>{
//     res.send("Hello, this is profile page")
// })

//Middleware
// const express = require('express');
// const app = express()
// const morgan = require('morgan')

// app.set("view engine", 'ejs')

// app.use(morgan('dev'))
// app.use((req,res,next)=>{
//     console.log("this is middleware")
//     const a =2;
//     const b =3;
//     console.log(a+b)

//     return next()
// })
// app.get('/',(req,res,next)=>{
//     const num1 = 10;
//     const num2 = 20;
//     console.log(num1+num2)
//     return next()
// }, (req,res)=>{
//     res.render('index')
// })
// app.get('/about', (req,res)=>{
//     res.send("Hello, this is about page")

// })

// app.get('/profile', (req,res)=>{
//     res.send("Hello, this is profile page")
// })


//Form Control
const express = require('express');
const app = express()
const morgan = require('morgan')
const userModel = require('./models/user')
const dbconnection = require('./config/db')

//built in widdle ware 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


app.use(morgan('dev'))
app.set("view engine", 'ejs')
app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/about', (req,res)=>{
    res.send("Hello, this is about page")

})

app.get('/profile', (req,res)=>{
    res.send("Hello, this is profile page")
})

app.get('/register', (req, res)=>{
    res.render('register')
})

// Create operation
app.post('/register', async(req, res)=>{
    console.log(req.body);
    const {username, email, password} = req.body;
    const users = await userModel.create({
        username : username,
        email : email,
        password :password
    })
    res.send(users);
})

// Read operation
app.get('/get-user', (req, res)=>{
    userModel.find().then((users)=>{
        res.send(users)

    })
})

// //finding name mukku
// app.get('/get-user', (req, res)=>{
//     userModel.find({
//         username : 'mukku'
//     }).then((users)=>{
//         res.send(users)

//     })
// })

//Update operation

app.get('/update-user', async(req, res)=>{
    await userModel.findOneAndUpdate({
        username : 'anny'
    },{
        email : "hi@com"
    })
    res.send('user updated')
})

//delete operation 

app.get('/delete-user', async(req, res)=>
{
    await userModel.findOneAndDelete({
        username : 'mukku'
    })
    res.send('user deleted')
})

app.post('/get-data', (req,res)=>{
    console.log(req.body);
    res.send('Data recieved');
})

app.listen(3000)

