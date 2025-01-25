import React, { useState } from 'react'

const Task13 = () => {
    const [text, setText] = useState("");

    return (
      <div>
        <input onChange={(e) => setText(e.target.value)} />
        <p>{text}</p>
      </div>
    );
}

export default Task13
