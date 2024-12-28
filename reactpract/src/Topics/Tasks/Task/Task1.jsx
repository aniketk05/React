import React, { useState } from "react";

const Task1 = () => {
  const [state, setState] = useState(0);

  let handleIncrement =()=>{
    setState(state+1)
  }

  let handleDecrement =()=>{
    if(state>0)
    setState(state-1)
  }

  let handleReset =()=>{
    if(state>0)
    setState(0)
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-lg m-4">Count : {state}</h1>
      <article>

      <button
        onClick={handleIncrement}
        className="bg-blue-400 rounded-md text-white px-3 m-2"
        >
        Increment{" "}
      </button>
      <button
        onClick={handleDecrement}
        className="bg-blue-400 rounded-md text-white px-3 m-2"
        >
        Decrement
      </button>
      <button
        onClick={handleReset}
        className="bg-blue-400 rounded-md text-white px-3 m-2"
        >
        Reset
      </button>
          </article>
    </div>
  );
};

export default Task1;
