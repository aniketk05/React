import React, { useState } from "react";

const Task5 = () => {

    const [state,setState]=useState(0)
    const [input,setInput]=useState(0)
    let handleChange=(e)=>{
        if(Number(e.target.value)>0)
        setInput( Number(e.target.value))   
    } 
    let handleIncrement =()=>{
        
            setState(state+input)
      }
    
      let handleDecrement =()=>{
        if(state>0)
            setState(state-input)
      }
    
      let handleReset =()=>{
        if(state>0)
            setState(0)
      }
    return (
    <div className="flex h-screen flex-col justify-center items-center">
      <input
        type="number"
        placeholder="Enter steps"
        onChange={handleChange}
        className="rounded-md border-[1px] border-black"
      />
      <h1 className="text-lg m-4">Count : {state}</h1>
      <div>
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
      </div>
    </div>
  );
};

export default Task5;
