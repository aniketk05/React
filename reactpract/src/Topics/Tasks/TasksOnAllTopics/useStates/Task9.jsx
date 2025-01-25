import React, { useState } from 'react'

const Task9 = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
  
    const addTask = () => {
      setTasks([...tasks, newTask]);
      setNewTask("");
    };
  
    return (
      <div>
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
}

export default Task9
