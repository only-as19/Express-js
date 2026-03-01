const express = require("express");
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')
// // it applies logger (middleware function on every route)
// app.use(logger)
// while using app.use for middleware, order of the function is very important
// if you want to apply on every route the app.use must be on the top

// app.use(logger) // single middleware function

app.use([logger,authorize]) //multiple middleware function

app.get("/",(req, res) => {
  res.send("Home page");
});

app.get("/about",(req, res) => {
  res.send("About page");
});

app.get("/api/products",(req, res) => {
  res.send("Product page");
});

app.get("/api/items",(req, res) => {
  res.send("Items page");
});

app.listen(5000, () => {
  console.log("server is listening in port 5000");
});
