import React, { useEffect, useState } from "react";

const Task8 = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    let timer=setTimeout(()=>{
        setState(true)
        console.log("hello")
    },5000)
  }, []);

  if (!state) return null;
  return (
    <div className="flex justify-center">
      <div
        className="fixed top-10 rounded-md border-black border-[1px] shadow-2xl"
        style={{ padding: "10px", backgroundColor: "lightblue" }}
      >
        <p>Notification: This is a pop-up!</p>
        <button
          className="rounded-md border-[1px] shadow-md border-gray-700 my-4 bg-blue-700 text-white px-2"
          onClick={() => setState(false)}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Task8;
