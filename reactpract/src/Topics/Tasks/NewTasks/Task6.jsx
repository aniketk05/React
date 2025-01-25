import React, { useEffect, useState } from "react";

const Task6 = () => {
  const [state, setState] = useState("");
  const [width,setWidth]=useState(0)

  

  let handleChange = (e) => {
   setState(e.target.value)
  };
  useEffect(()=>{
    if(state>='A'||state<='Z'||state>='A'||state<='Z'){
        setWidth(width+20)
      }
      if(state>=0 && state<=9){
        setWidth(width+40)
      }
      if(state.length==8){
        setWidth(width+100)
      }
  },[state])
  console.log(state)
  return (
    <div className="">
      <input
        type="text"
        placeholder="Enter Something"
        className="border-[1px] border-black rounded-md px-2"
        onChange={handleChange}
      />
      <main>
        <div
          className="bg-red-600 h-[40px] m-4"
          style={{
            "width":`${width}%`   ,
          }}
        ></div>
      </main>
    </div>
  );
};

export default Task6;
