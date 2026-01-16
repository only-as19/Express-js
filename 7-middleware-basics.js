const  express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Home page')
})

app.get('/about',(req,res)=>{
    res.send('About page')
})

app.listen(5000,()=>{
    console.log('server is listening in port 5000');
})