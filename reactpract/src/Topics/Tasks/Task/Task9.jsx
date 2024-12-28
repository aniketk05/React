import React, { useState } from 'react'

const Task9 = () => {
    const [cart, setCart] = useState({ apple: 0, banana: 0 });

    const addItem = (item) => {
      setCart({ ...cart, [item]: cart[item] + 1 });
    };
  
    const removeItem = (item) => {
      setCart({ ...cart, [item]: Math.max(0, cart[item] - 1) });
    };
  
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-emerald-300">
        <h2>Shopping Cart</h2>
        <div>
        <button className="bg-blue-400 rounded-md text-white px-3 m-2" onClick={() => addItem('apple')}>Add Apple</button>
        <button className="bg-blue-400 rounded-md text-white px-3 m-2" onClick={() => removeItem('apple')}>Remove Apple</button>
        <button className="bg-blue-400 rounded-md text-white px-3 m-2" onClick={() => addItem('banana')}>Add Banana</button>
        <button className="bg-blue-400 rounded-md text-white px-3 m-2" onClick={() => removeItem('banana')}>Remove Banana</button>
        </div>
        <p>Total Items: {cart.apple + cart.banana}</p>
      </div>
    );
}

export default Task9
