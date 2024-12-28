import React, { useState } from "react";

const Task3 = () => {
  const [state, setState] = useState("");
  let handleChange = (e) => {
    let name = "" + e.target.value;

    setState(name);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <input
        type="text"
        placeholder="Enter your name"
        value={state}
        onChange={handleChange}
        className="rounded-md border-[1px] border-black"
      />
      <h1 className="text-lg m-4">Hello, {!state ? "Stranger" : state}</h1>
    </div>
  );
};

export default Task3;
