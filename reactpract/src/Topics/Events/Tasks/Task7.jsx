import React, { useState } from 'react'

export default function Task7() {
    
    const [windowHeight,setWindowHeight]=useState("")
    const [windowWidth,setWindowWidth]=useState("")
    window.onresize=(e)=>{
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
    }
  return (
    <div className='' >
      <h1 className='text-[2rem] '>Window size :  {windowWidth} X {windowHeight} </h1>
    </div>
  )
}
