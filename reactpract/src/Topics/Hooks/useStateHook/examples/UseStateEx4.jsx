import React, { useState } from 'react'

export default function UseStateEx4() {
    const [circle,setCircle]=useState(false)
  return (
    
         <>
     <div style={{
        backgroundColor:"red",
        width:"200px",
        height : "200px",
        borderRadius : circle ? "50%" : "0%",
     }}></div> 
     <button onClick={
        ()=>{
            setCircle(!circle)
        }
     }>Click</button>
     
    </>
      
    
  )
}
