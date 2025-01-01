import React, { useEffect, useState } from 'react'

const Task4 = () => {

   const [state,setState]=useState(null)

   useEffect(()=>{
    localStorage.setItem('theme',state)
   },[state])

  return (
    <div>
      <button  className='bg-blue-500 rounded-md text-white px-2' onClick={()=>{
        setState(localStorage.getItem('theme')=='dark'?'light':'dark')
      }}>Click to Change</button>
    </div>
  )
}

export default Task4
