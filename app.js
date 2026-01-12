const http = require("http");

const server = http.createServer((req, res) => {
  // write header : metadata of request
  // Methods: 200,404 etc
  //   requesting object
  const url = req.url;
  //   Home
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
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
