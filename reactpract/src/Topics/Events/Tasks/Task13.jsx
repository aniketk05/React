import React, { useState } from 'react'

export default function Task13() {
    const [message, setMessage] = useState('');

    const handleMouseMove = () => {
      setMessage('');
    };
  
    setTimeout(() => {
      if (!message) {
        setMessage("Hello? Are you there? React is getting lonely.");
      }
    }, 5000); 
  
    return (
      <div
        onMouseMove={handleMouseMove}
        className="relative w-screen h-screen bg-gray-100 flex items-center justify-center"
      >
        {message && (
          <div className="absolute top-0 left-0 p-4 bg-yellow-500 text-black text-xl font-semibold rounded-md">
            {message}
          </div>
        )}
        <div className="text-center text-gray-800">
          <h1 className="text-2xl">Idle User Warning</h1>
          <p>Move your mouse to reset the timer.</p>
        </div>
      </div>
    );
}
