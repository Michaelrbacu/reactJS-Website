import React, { useState, useEffect } from "react";
import "./todo.css";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo">
      <div className="todo-content">
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index} className="chat-message">
              {task}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Type a message..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Send</button>
      </div>
    </div>
  );
}


//change

export default Todo;