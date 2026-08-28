import TaskModel from "../models/TaskModel.js";

export const createTaskController = async (req, res) => {
  try {
    const {
      title,
      description,
      assignedTo,
      dueDate,
    } = req.body;

    if (!title || !assignedTo) {
      return res.status(400).json({
        success: false,
        message: "Title and assignedTo are required",
      });
    }

    const task = await TaskModel.create({
      title,
      description,
      assignedTo,
      assignedBy: req.user.id,
      dueDate,
      status: "assigned",
    });

    return res.status(201).json({
      success: true,
      message: "Task created and assigned successfully",
      task,
    });
  } catch (error) {
  console.error("Create Task Error:", error);

  return res.status(500).json({
    success: false,
    message: "Task creation failed",
    error: error.message,
  });
}
};

export const getAllTasksController = async (req, res) => {
  try {
    const tasks = await TaskModel.find()
      .sort({ createdAt: -1 });

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

export const getTaskByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await TaskModel.findById(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    console.error("Get Task By ID Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get task",
      error: error.message,
    });
  }
};