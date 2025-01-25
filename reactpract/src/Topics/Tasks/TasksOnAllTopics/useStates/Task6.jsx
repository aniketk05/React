import React, { useState } from 'react'

const Task6 = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count: {count}</p>
      </div>
    );
}

export default Task6
