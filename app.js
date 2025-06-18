const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("hi jenny");

})

app.listen(3000, ()=>{
    console.log("running in 3000 port");
})