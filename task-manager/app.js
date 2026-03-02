import express from "express";
import dotenv from "dotenv";

import tasks from "./router/tasks.js";
import errorHandler from "./middlewares/error-handler.js";
import connectDB from "./db/connect.js";
import notFound from "./middlewares/not-found.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static("./public"));

// Home Route (important for Vercel)
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

// API Route
app.use("/api/v1/tasks", tasks);

// 404 Middleware
app.use(notFound);

// Error Middleware
app.use(errorHandler);

// Connect to DB
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Only run server locally
    if (process.env.NODE_ENV !== "production") {
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    }

  } catch (error) {
    console.log(error);
  }
};

start();

export default app;