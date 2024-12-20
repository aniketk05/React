import React, { useState } from 'react'

export default function Task21() {
    const [message, setMessage] = useState('');

    const handleMouseEnter = () => {
      setMessage('Cloudy vibes today.');
    };
  
    const handleRightClick = (e) => {
      e.preventDefault();
      setMessage('Storm incoming!');
    };
  
    const handleDoubleClick = () => {
      setMessage('Sunny and happy!');
    };
  
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onContextMenu={handleRightClick}
        onDoubleClick={handleDoubleClick}
        className="w-64 h-64 bg-gray-400 flex items-center justify-center text-white text-xl font-semibold cursor-pointer"
      >
        {message || 'Hover, right-click, or double-click me!'}
      </div>
    );
}
