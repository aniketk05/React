import React, { useEffect, useState } from 'react'

const Task3 = () => {
    const [state,setState]=useState(10)
    useEffect(()=>{
        let count=0
        let timer=setInterval(()=>{
            setState(state-1)
            count++
            
        },1000)
        if(count==10)
            return clearInterval(timer)
  
    },[state])
  return (
    <div className='flex h-screen justify-center items-center'>
      <p>{state>0?<span className='text-3xl  font-extrabold'>{state}</span>:<span className='text-3xl text-red-600 font-bold' >Time Is up</span>}</p>
    </div>
  )
}

export default Task3
