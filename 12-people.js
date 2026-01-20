const express = require("express");
const router = express.Router();

let { people } = require("./data");

router.get("/", (req, res) => {
  res.status(200).json({ success: "true", data: people });
});

router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

// PUT

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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

module.exports = router;
