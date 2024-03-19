import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTaskById);
router.post("/tasks/create", authRequired, createTask);
router.delete("/tasks/delete/:id", authRequired, deleteTask);
router.put("/tasks/update/:id", authRequired, updateTask);

export default router;
