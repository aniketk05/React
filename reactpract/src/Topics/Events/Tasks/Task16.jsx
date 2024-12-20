import React, { useState } from 'react'

export default function Task16() {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-72 h-72 bg-gray-400"
      >
        <img
          src="https://www.google.com/treasure-map.jpg" 
          alt="Treasure Map"
          className={`w-full h-full object-cover transition-all duration-300 ${
            isHovered ? 'filter blur-0' : 'filter blur-2xl'
          }`}
        />
        {isHovered && (
          <div className="absolute bottom-4 left-4 text-white font-semibold text-xl">
            X marks the React component.
          </div>
        )}
      </div>
    );
}
