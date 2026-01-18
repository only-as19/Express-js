// HTTP methods:

const express = require('express')
const app = express()
const {people} = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse from data
app.use(express.urlencoded({extended:false}))
// parse from json
app.use(express.json())
// GET method: server perform this method to read the data
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:'true',data:people})
})

// POST[]
app.post('/login',(req,res)=>{
    const {name} = req.body
    if(name){
        res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send("Please enter valid credentials")
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})


app.listen(5000,()=>{
    console.log('server is listening');
    
})

// PUT
// DELETE


