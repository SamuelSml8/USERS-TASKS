import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    }).populate("user");
    // res.status(200).json(tasks);

    res.status(200).json({
      ok: true,
      message: "All tasks",
      data: tasks,
    });
  } catch (error) {
    console.log("Error getting all tasks", error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const taksFound = await Task.findById(req.params.id).populate("user");
    if (!taksFound) {
      return res.status(404).json({
        ok: false,
        message: "Task not found",
        data: null,
      });
    }

    res.status(200).json({
      ok: true,
      message: "Task found by ID",
      data: taksFound,
    });
  } catch (error) {
    console.log("Error getting task by id", error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    const saveTask = await newTask.save();
    res.status(201).json({
      ok: true,
      message: "Task created",
      data: saveTask,
    });
  } catch (error) {
    console.log("Error creating task", error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskFound = await Task.findByIdAndDelete(id);
    if (!taskFound) {
      return res.status(404).json({
        ok: false,
        message: "Task not found",
        data: null,
      });
    }

    res.status(200).json({
      ok: true,
      message: "Task deleted",
      data: taskFound,
    });
  } catch (error) {
    console.log("Error deleting task", error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskFound = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!taskFound) {
      return res.status(404).json({
        ok: false,
        message: "Task not found",
        data: null,
      });
    }

    res.status(201).json({
      ok: true,
      message: "Task updated",
      data: taskFound,
    });
  } catch (error) {
    console.log("Error updating all tasks", error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};
