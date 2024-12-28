import React, { useState } from "react";

const Task7 = () => {
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  ];

  const [state, setState] = useState("Click to get a quote");
  let handleClick = () => {
    let randIndx = Math.floor(Math.random() * quotes.length);
    setState(quotes[randIndx]);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-emerald-300">
      <blockquote className="text-center text-2xl shadow-md shadow-red-600 bg-red-400 rounded-md p-2">
        {state}
      </blockquote>
      <button
        className="bg-blue-500 rounded-md p-2 m-4 shadow-sm shadow-gray-400 text-white border-[1px] border-black"
        onClick={handleClick}
      >
        Get Qoute
      </button>
    </div>
  );
};

export default Task7;
