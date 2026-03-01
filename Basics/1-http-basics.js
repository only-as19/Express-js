const http = require("http");
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./index.html')
// why we use readFileSync ?

// Reason 1: Because we don't have to invoke the file by clicking or performing some
// action, we need the file while instantiating the server, means whenever the server is loading

// Reason 2: We just use it as an example not when we build something big
const server = http.createServer((req, res) => {
  // write header : metadata of request
  // Methods: 200,404 etc
  //   requesting object
//   Passing HTML File in write()
  const url = req.url;
  //   Home
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //   About
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
  //   404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(5000);
