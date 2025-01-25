import React from 'react'

const Task26 = () => {
    const colors=["red","blue","green","yellow"]
    return (
        <ul>
          {colors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      );
}

export default Task26
