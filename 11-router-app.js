// HTTP methods:

const express = require("express");
const app = express();
const people = require("./12-people");
const auth = require("./13-auth");
// static assets
app.use(express.static("./methods-public"));
// parse from data
app.use(express.urlencoded({ extended: false }));
// parse from json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please enter valid credentials");
});

// GET method: server perform this method to read the data
app.get("/", (req, res) => {
  res.status(200).json({ success: "true", data: people });
});

// POST[]

app.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

app.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

// PUT

app.put("/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const person = people.find((name) => name.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No one found with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

// DELETE

app.delete("/:id", (req, res) => {
  const { id } = req.params;

  const person = people.find((name) => name.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No one found with id ${id}` });
  }

  const newPeople = people.filter((person) => {
    return person.id !== Number(id);
  });
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("server is listening");
});
