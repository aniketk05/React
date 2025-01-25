import React from 'react'

const Task24 = () => {
  const tasks=["Eating","sleeping","playing"]
    return tasks.length ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      ) : (
        <p>No tasks available!</p>
      );
}

export default Task24
