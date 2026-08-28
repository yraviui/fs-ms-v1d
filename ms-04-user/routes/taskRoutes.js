import express from "express";

import {
  getMyTasksController,
  getMyTaskByIdController,
  updateTaskStatusController,
} from "../controllers/taskController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  getMyTasksController
);

router.get(
  "/:id",
  authMiddleware,
  getMyTaskByIdController
);

router.put(
  "/:id/status",
  authMiddleware,
  updateTaskStatusController
);

export default router;