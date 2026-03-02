import express from "express";
const app = express();
import tasks from "./router/tasks.js";
import errorHandler from "./middlewares/error-handler.js";
import connectDB from "./db/connect.js";
import notFound from "./middlewares/not-found.js";
const port = 3000;
import dotenv from "dotenv";
dotenv.config();
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


export default app;
