import React, { useState } from "react";

export default function Task8() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div
      className=" w-[100vw] h-[100vh] overflow-hidden  "
      onMouseMove={(e) => {
        setX(e.clientX);
        setY(e.clientY);
      }}
    >
        <h1 className="absolute" >Wow, such skills! The dot is impressed.</h1>
      <div
        style={{
          position: "relative",
          top: `${y-10}px`,
          left: `${x-10}px`,
        }}
        className="bg-red-500 w-4 h-4 rounded-[50%] transition-transform pointer-events-none"
      ></div>
    </div>
  );
}
