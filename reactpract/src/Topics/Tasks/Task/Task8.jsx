import React, { useState } from "react";

const Task8 = () => {
  const [count, setCount] = useState("");

  let handleChange =(e)=>{
    setCount(e.target.value)
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <textarea
        name=""
        id=""
        value={count}
        maxLength={200}
        className="border-[1px] rounded-md border-black m-2 w-60 h-32"
        onChange={handleChange}
      ></textarea>
      <h1 style={{
        color : count.length>180?"red":"black"
      }}>Characters :{count.length}/200 </h1>
    </div>
  );
};

export default Task8;
