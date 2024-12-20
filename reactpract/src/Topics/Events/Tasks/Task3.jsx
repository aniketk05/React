import React from "react";
import plant from '../../../assets/plant.png'

export default function Task3() {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <img src={plant} alt="" className="h-[200px]" onMouseOver={(e)=>{
        e.target.style.height="400px"
      }}/>
    </div>
  );
}
