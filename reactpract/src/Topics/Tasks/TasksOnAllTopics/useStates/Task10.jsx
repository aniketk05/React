import React, { useState } from 'react'

const Task10 = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Add to Cart</button>
        <p>Items in cart: {count}</p>
      </div>
    );
}

export default Task10
