import React, { useEffect, useState } from "react";

const UseEffectEx4 = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  console.log("start");

  useEffect(() => {
    console.log("useEffect callback function called");
  }, []);
  console.log("end");

  return (
    <div>
      <button
        onClick={() => {
          setState1(state1 + 1);
        }}
        className="bg-blue-500 rounded-md ps-3 text-white"
      >
        state1 {state1}
      </button>
      <button
        onClick={() => {
          setState2(state2 + 1);
        }}
        className="bg-blue-500 rounded-md ps-3 m-3 text-white"
      >
        state1 {state2}
      </button>
    </div>
  );
};

export default UseEffectEx4;
