import React, { useState } from 'react'

const Task34 = () => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState("");
  
    const addItem = () => {
      setItems([...items, item]);
      setItem("");
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Add item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
}

export default Task34
