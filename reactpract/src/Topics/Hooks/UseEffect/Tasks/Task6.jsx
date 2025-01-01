import React, { useEffect, useState } from "react";

const Task6 = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    let handleScroll = () => {
      let scroll= Math.floor((window.scrollY/window.innerHeight)*100)
      setState(scroll)
    };
    window.addEventListener("scroll", handleScroll);
  },[]);

  return <div className="h-[200vh]" style={{
   
    backgroundColor:state>80?"red":state>50?"yellow":"green",
    width:`${state}%`
  }}></div>;
};

export default Task6;
