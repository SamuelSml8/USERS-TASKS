import axios from "./axios";

export const getTasksRequest = async () => axios.get("/tasks");

export const getTaskRequest = async (id) => axios.get(`/tasks/${id}`);

export const createTaskRequest = async (task) =>
  axios.post("/tasks/create", task);

export const updateTaskRequest = async (id, task) =>
  axios.put(`/tasks/update/${id}`, task);

export const deleteTaskRequest = async (id) =>
  axios.delete(`/tasks/delete/${id}`);
