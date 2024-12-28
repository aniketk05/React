import React, { useState } from "react";

const Task4 = () => {
  const [state, setState] = useState(false);

  let handleTheme = () => {
    setState(!state);
  };
  return (
    <div
      className="flex h-screen justify-center items-center flex-col "
      style={{
        background: state ? "white" : "black",
        color: !state ? "white" : "black",
      }}
    >
      <h1>{!state ? "Dark Mode" : "Light Mode"}</h1>
      <button className="text-5xl" onClick={handleTheme}>
        {!state ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default Task4;
