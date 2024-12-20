import React, { useState } from 'react'

export default function Task17() {
    const [isVisible, setIsVisible] = useState(false);

    const handleRightClick = (event) => {
      event.preventDefault(); 
      setIsVisible(true);
    };
  
    return (
      <div
        onContextMenu={handleRightClick}
        className="w-screen h-screen bg-gray-100 flex items-center justify-center"
      >
        {isVisible && (
          <div className="absolute p-6 bg-blue-500 text-white text-xl font-semibold rounded-lg">
            Didn’t expect me, huh?
          </div>
        )}
        <div className="text-gray-800 text-xl font-medium">
          Right-click anywhere to trigger the popup!
        </div>
      </div>
    );
}
