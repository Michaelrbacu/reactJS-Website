import React, { useState, useEffect } from "react";
import "./todo.css";
import trash from "./trash-icon.png";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskImportance, setTaskImportance] = useState("low");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (taskName.trim() === "" || taskDescription.trim() === "") {
      return;
    }

    const newTask = {
      name: taskName,
      description: taskDescription,
      importance: taskImportance,
      addedAt: new Date().toLocaleString(),
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskName("");
    setTaskDescription("");
    setTaskImportance("low");
  };

  const handleCompleteTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo">
      <div className="task-inputs">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <select
          value={taskImportance}
          onChange={(e) => setTaskImportance(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="todo-content">
        <div className="task-grid">
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`task ${task.completed ? "completed" : ""}`}
            >
              <div className="task-text">
                <strong>{task.name}</strong>
                <p style={{ color: "#000" }}>{task.description}</p>
              </div>
              <div className="task-info">
                <span className="task-date">Added: {task.addedAt}</span>
                <button onClick={() => handleCompleteTask(index)}>
                  {task.completed ? "Undo" : "Complete"}
                </button>
              </div>
              <img
                src={trash}
                alt="Delete"
                className="task-delete"
                style={{ width: "20px", height: "20px" }}
                onClick={() => handleDeleteTask(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
