const express = require("express");
const app = express();
const tasks = require("./router/tasks");
const connectDB = require("./db/connect");
const notFound = require('./middlewares/not-found').default
const errorHandler = require('./middlewares/error-handler')
const port = 3000;
require('dotenv').config()
//middleware
app.use(express.static('./public'))
app.use(express.json());


app.use("/api/v1/tasks", tasks);

app.use(notFound)
app.use(errorHandler)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`The server is listening to the port ${port}...`);
    });
  } catch (error) {
    console.log(error);
    
  }
};

start()
