import React, { useState } from 'react'

export default function Task15() {
    const [bgColor, setBgColor] = useState('bg-blue-500');

    const handleWheel = () => {
      const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    };
  
    return (
      <div
        onWheel={handleWheel}
        className={`w-72 h-72 flex items-center justify-center text-white text-xl font-semibold ${bgColor}`}
      >
        Scroll to change my vibe!
      </div>
    );
}
