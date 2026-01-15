const express = require('express')
const path = require('path')


const app = express()


// setup statics and middleware
// static assets: are those assets that server don't need to chnage these files e.g, JS files, CSS file etc

app.use(express.static('./public'))

app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.use((req,res)=>{
  res.status.send('Resources not found')
})



app.listen(5000,()=>{
  console.log('Server is listning on port 50000');
  
})