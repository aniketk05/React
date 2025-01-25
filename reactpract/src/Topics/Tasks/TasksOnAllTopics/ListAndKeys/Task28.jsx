import React, { useState } from 'react'

const Task28 = () => {
    const [list, setList] = useState(["Play","Sleep","Swim","Gym"]);

    const deleteItem = (index) => {
      setList(list.filter((_, i) => i !== index));
    };
  
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
}

export default Task28
