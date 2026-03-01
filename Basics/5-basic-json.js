// Basic Express Json

const express = require('express')
const app = express()
const {products} = require('./data')

// Basic Json Example
// app.get('/',(req,res)=>{
//   res.json([{name: 'Peter'},{name: 'Mark'}])
// })

// set up json using some useful data
app.get('/',(req,res)=>{
  res.json(products)
})


app.listen(5000,()=>{
  console.log('Server is listening to the port 5000');
})