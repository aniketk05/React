import React, { useState } from 'react'

export default function Task18() {
    const [bgColor, setBgColor] = useState('bg-red-500');

    const handleClick = () => {
      const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    };
  
    return (
      <div
        onClick={handleClick}
        className={`w-64 h-64 flex items-center justify-center text-white text-xl font-semibold ${bgColor} rounded-lg cursor-pointer`}
      >
        I’m a chameleon, can’t catch me!
      </div>
    );
}
