import React, { useState } from 'react'

const Task30 = () => {
    const [query, setQuery] = useState("");

    const items=["football","cleats","Dumbell","Cones"]

    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
}

export default Task30
