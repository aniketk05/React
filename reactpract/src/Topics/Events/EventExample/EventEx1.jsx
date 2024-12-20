import React from "react";

export default function EventEx1() {
  let demo=(name)=>{console.log("Hello ",name)}
  return (
    <div>
      <button
        className="bg-slate-600 text-white h-[30px] border-[1px] w-[80px] rounded-md"
        onClick={() => {
          let innerFunction=()=>{

            demo("Cristiano")
          }
          innerFunction()
        }}
      >
        Click
      </button>
    </div>
  );
}
