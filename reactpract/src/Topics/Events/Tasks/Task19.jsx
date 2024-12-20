import React, { useState } from 'react'

export default function Task19() {
    const [message, setMessage] = useState('');

    const handleHover = (e) => {
      if (e.target.className.includes('wall')) {
        setMessage('Oops! Walls hurt, don’t they?');
      }
    };
  
    return (
      <div className="w-72 h-72 bg-gray-300 relative">
        <div
          onMouseMove={handleHover}
          className="w-1/2 h-1/2 bg-blue-500 absolute top-0 left-0"
        ></div>
        <div
          onMouseMove={handleHover}
          className="w-1/2 h-1/2 bg-blue-500 absolute top-0 right-0"
        ></div>
        {message && (
          <div className="absolute bottom-4 left-4 text-xl text-red-500 font-semibold">
            {message}
          </div>
        )}
      </div>
    );
}
