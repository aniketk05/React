import React, { useEffect, useState } from "react";

const Task5 = () => {
  const [color, setColor] = useState("#ffffff");
  const [pause, setPause] = useState(false);
  useEffect(() => {
    
    let timer = setInterval(() => {
      setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }, 2000);
    return clearInterval(timer);
      
    
  }, [pause]);

  return (
    <div
      style={{
        background: color,
      }}
      className="flex h-screen justify-center items-center "
    >
      <button
        onClick={() => {
          setPause(!pause);
          console.log(pause);
        }}
        className="bg-blue-500 rounded-md text-white px-3"
      >
        pause
      </button>
    </div>
  );
};

export default Task5;
