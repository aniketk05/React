import React, { useEffect, useState } from 'react'

const Task20 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log(`Counter incremented to: ${count}`);
    }, [count]);
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count: {count}</p>
      </div>
    );
}

export default Task20
