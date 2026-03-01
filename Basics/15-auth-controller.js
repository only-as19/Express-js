const login = (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please enter valid credentials");
}

module.export = login