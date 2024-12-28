import React, { useState } from "react";

const Task2 = () => {
    const [state,setState]=useState(false)
    let handleVisibility=()=>{
        setState(!state)
    }
     return (
    <div className="h-screen flex flex-col justify-center items-center">
     {!state && <h1 className="text-lg m-4">Hello Machha</h1>}
      <button
        onClick={handleVisibility}
        className="bg-blue-400 rounded-md text-white px-3 m-2"
      >{state ? "show":"hide"}</button>
    </div>
  );
};

export default Task2;
