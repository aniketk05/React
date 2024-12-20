import React, { useState } from 'react'

export default function Task20() {
    const [message, setMessage] = useState('');

    const handleClick = () => {
      setMessage('Huh? Oh, sorry, I was on a break.');
    };
  
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md"
        >
          Click Me
        </button>
        {message && <p className="mt-4 text-xl text-gray-800">{message}</p>}
      </div>
    );
}
