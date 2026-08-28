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
    console.log("Admin MongoDB connected");
  })
  .catch((error) => {
    console.error(error);
  });

app.get("/", (req, res) => {
  res.json({
    success: true,
    service: "mfe-03-admin",
    port: 5002,
  });
});

app.use("/api/admin/tasks", taskRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Admin service running on port ${PORT}`);
});