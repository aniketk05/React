import React, { useState } from 'react'

const Task8 = () => {
    const [input, setInput] = useState("");
    return (
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <p>{input}</p>
      </div>
    );
}

export default Task8


