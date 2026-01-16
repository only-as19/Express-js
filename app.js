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
app.post('/api/products',(req,res)=>{

})

app.listen(5000,()=>{
    console.log('server is listening');
    
})

// PUT
// DELETE


