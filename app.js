// HTTP methods:

const express = require("express");
const app = express();
const people = require("./12-people");
const auth = require("./13-auth");
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("./14-controller");
const { login } = require("./15-auth-controller");
// static assets
app.use(express.static("./methods-public"));
// parse from data
app.use(express.urlencoded({ extended: false }));
// parse from json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.post("/", login);

// GET method: server perform this method to read the data
app.get("/", getPeople);


app.post("/postman", createPersonPostman);
app.post("/", createPerson);
app.put("/:id", updatePerson);
app.delete("/:id", deletePerson);

app.listen(5000, () => {
  console.log("server is listening");
});
