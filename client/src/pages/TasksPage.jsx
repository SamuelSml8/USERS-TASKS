import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  // Hacer funcional
  if (tasks.length === 0) {
    return <h1>No tasks</h1>;
  }

  return (
    <div>
      {tasks.data.map((task) => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TasksPage;
