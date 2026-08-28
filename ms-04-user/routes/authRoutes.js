import express from "express";

import {
  getMyTasksController,
  updateTaskStatusController,
} from "../controllers/taskController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/my-tasks",
  authMiddleware,
  getMyTasksController
);

router.put(
  "/:id/status",
  authMiddleware,
  updateTaskStatusController
);

export default router;