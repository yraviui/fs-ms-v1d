import TaskModel from "../models/TaskModel.js";

export const getMyTasksController = async (req, res) => {
  try {
    const tasks = await TaskModel.find({
      assignedTo: req.user.id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to get tasks",
    });
  }
};

export const updateTaskStatusController = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const { status } = req.body;

    const allowedStatuses = [
      "assigned",
      "in-progress",
      "completed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid task status",
      });
    }

    const task = await TaskModel.findOne({
      _id: id,
      assignedTo: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found or not assigned to you",
      });
    }

    task.status = status;

    await task.save();

    return res.status(200).json({
      success: true,
      message: "Task status updated successfully",
      task,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to update task status",
    });
  }
};

export const getMyTaskByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await TaskModel.findOne({
      _id: id,
      assignedTo: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found or not assigned to you",
      });
    }

    return res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    console.error("Get My Task By ID Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get task",
      error: error.message,
    });
  }
};