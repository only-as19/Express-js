// HTTP methods:

const express = require('express')
const app = express()
const {people} = require('./data')
// GET method: server perform this method to read the data
app.get('/',(req,res)=>{
    res.status(200).json({success:'true',data:people})
})



app.listen(5000,()=>{
    console.log('server is listening');
    
})

// POST
// PUT
// DELETE


