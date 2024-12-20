import React, { useState } from 'react'

export default function Task9() {
    const [shakeIndex, setShakeIndex] = useState(null);
    const [message, setMessage] = useState('');
  
    const handleWrongClick = (index) => {
      setShakeIndex(index);
      setMessage('Nope! Try harder!');
      setTimeout(() => setShakeIndex(null), 500); 
    };
  
    const handleCorrectClick = () => {
      setMessage('Congratulations! You found it!');
    };
  
    const buttons = ['Wrong 1', 'Wrong 2', 'Wrong 3', 'Correct'];
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold mb-6">Shake on Wrong Click</h1>
        <div className="grid grid-cols-2 gap-4">
          {buttons.map((label, index) => (
            <button
              key={index}
              onClick={() =>
                label === 'Correct' ? handleCorrectClick() : handleWrongClick(index)
              }
              className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-md transition-transform ${
                shakeIndex === index ? 'animate-shake' : ''
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {message && (
          <p className="mt-6 text-lg font-medium text-gray-800">{message}</p>
        )}
      </div>
    );
}
