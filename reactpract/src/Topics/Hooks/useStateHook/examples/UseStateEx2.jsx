import React, { useState } from 'react'

export default function UseStateEx2() {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1>Count : {count}</h1>
        <button
        onClick={()=>{
            setCount(count+10);
            setCount((pre)=>pre+20)
            setCount((pre)=>pre+30)
        }}
        >
            increment
        </button>
      
    </div>
  )
}
