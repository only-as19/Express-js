import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import tasks from "./router/tasks.js";
import errorHandler from "./middlewares/error-handler.js";
import connectDB from "./db/connect.js";
import notFound from "./middlewares/not-found.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

start();

export default app;