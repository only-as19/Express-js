const  express = require('express')
const app = express()


// when we use middleware express automatically pass those parameter in the function
const logger = (req,res,next)=>{
  const method = req.method
  const url = req.url
  const date = new Date().getFullYear()
  console.log(method,url,date);
  next()  // always call in the middleware
  
}

app.get('/',logger,(req,res)=>{
    res.send('Home page')
})

app.get('/about',logger,(req,res)=>{
    res.send('About page')
})

app.listen(5000,()=>{
    console.log('server is listening in port 5000');
})