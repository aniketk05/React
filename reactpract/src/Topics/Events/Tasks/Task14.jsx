import React, { useState } from 'react'

export default function Task14() {
    const [shake, setShake] = useState(false);

    const handleMouseEnter = () => {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 500); 
    };
  
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div
          onMouseEnter={handleMouseEnter}
          className={`w-40 h-40 bg-blue-500 text-white flex items-center justify-center text-xl font-semibold rounded-lg transition-transform ${
            shake ? 'animate-shake' : ''
          }`}
        >
          Stop tickling me!
        </div>
      </div>
    );
}
