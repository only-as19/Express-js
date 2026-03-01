// Express: Express is a minimal, flexible, node js web app framework 
// designed to make developing websites, web apps and apps much faster and easier. 

// not built in

// npm install express --save

const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    console.log('user hit the server')
})

app.listen(5000)

// methods

// app.get : read file
// app.post : insert data
// app.put : update data
// app.delete : delete data
// app.all : works with every one
// app.listen : same as http.listen
// app.use

