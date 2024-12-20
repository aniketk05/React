import React, { useState } from "react";

export default function Task5() {
    let [x,setX]=useState("")
    let [y,setY]=useState("")
  return (
    <div
      className="flex h-[100vh] justify-center items-center"
      onMouseMove={(e) => {
        setX(e.clientX)
        setY(e.clientY)
      }}
    >
      <h1 className="text-[2rem]">You're being watched</h1>
      <br />
      <p className="text-[1rem]">X : {x}</p>
      <br />
      <p className="text-[1rem]">Y : {y}</p>
    </div>
  );
}
