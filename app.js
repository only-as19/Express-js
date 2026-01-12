const http = require('http')

const server = http.createServer((req,res)=>{
    // write header
    res.writeHead(404,{"content-type": "text/html"})
    res.write('<h1>Home Page</h1>')
    res.end()
})

server.listen(5000)