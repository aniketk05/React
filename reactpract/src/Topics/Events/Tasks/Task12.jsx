import React, { useState } from 'react'

export default function Task12() {
    const [time, setTime] = useState(10);
    const [defused, setDefused] = useState(false);
    const [message, setMessage] = useState('');
  
    const startCountdown = () => {
      setMessage('');
      let countdown = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 1) {
            clearInterval(countdown);
            setMessage('BOOM!');
          }
          return prevTime - 1;
        });
      }, 1000);
    };
  
    const defuseBomb = () => {
      clearInterval();
      setDefused(true);
      setMessage('Bomb Defused!');
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <button onClick={startCountdown} className="px-6 py-2 bg-red-500 text-white rounded-md">
          Defuse the Bomb
        </button>
        {message && <p className="mt-4 text-xl text-gray-800">{message}</p>}
      </div>
    );
}
