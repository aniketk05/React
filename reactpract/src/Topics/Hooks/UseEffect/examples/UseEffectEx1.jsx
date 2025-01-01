import React, { useEffect, useState } from 'react'

const UseEffectEx1 = () => {
    const [state,setState]=useState(0)
    console.log("start")

    useEffect(()=>{
        console.log("useEffect callback function called")
        let fetching=async ()=>{
            let jsonData= await fetch("https://api.github.com/users")
            let data=await jsonData.json()
            console.log(data)
        }
        fetching()
    })
    console.log("end")
    
  return (
    <div>
      <h1>Count : {state}</h1>
      <button onClick={()=>{
        setState(state+1)
        
      }}
      className='bg-blue-500 rounded-md ps-3 text-white'>Increment</button>
    </div>
  )
}

export default UseEffectEx1
