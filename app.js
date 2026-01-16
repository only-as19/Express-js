// HTTP methods:

const express = require('express')
const app = express()
const {products} = require('./data')
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
// GET method: server perform this method to read the data
app.get('/',(req,res)=>{
    res.status(200).json({success:'true',data:products})
})

// POST
app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name} = req.body
    if(name){
        res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send("Please enter valid credentials")
})

app.listen(5000,()=>{
    console.log('server is listening');
    
})

// PUT
// DELETE


