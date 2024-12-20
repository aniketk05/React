import React, { useState } from 'react'

export default function Task10() {
    const [msg,setMsg]=useState()
   let handleVisibilityChange =()=>{ if(document.hidden)
        {setMsg("Don’t leave me! 😢")}
    else
        {setMsg("Oh, you’re back! 😍")}}
        document.addEventListener('visibilitychange', handleVisibilityChange);
  return (
    <div className='flex h-screen justify-center items-center' >
        <h1 className='text-[2rem]'>{msg}</h1>
    </div>
  )
}
