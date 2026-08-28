import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("User MongoDB connected");
  })
  .catch((error) => {
    console.error(error);
  });

app.get("/", (req, res) => {
  res.json({
    success: true,
    service: "mfe-04-user",
    port: 5003,
  });
});

app.use("/api/user/tasks", taskRoutes);

const PORT = process.env.PORT || 5003;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`User service running on port ${PORT}`);
});