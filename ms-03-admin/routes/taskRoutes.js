import express from "express";

import {
  createTaskController,
  getAllTasksController,
  getTaskByIdController,
} from "../controllers/taskController.js";

import authMiddleware, {
  isAdmin,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  isAdmin,
  createTaskController
);

router.get(
  "/",
  authMiddleware,
  isAdmin,
  getAllTasksController
);

router.get(
  "/:id",
  authMiddleware,
  isAdmin,
  getTaskByIdController
);

export default router;