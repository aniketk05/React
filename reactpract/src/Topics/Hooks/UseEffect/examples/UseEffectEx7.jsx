import React, { useState } from 'react'
import UseEffectEx8For7 from './UseEffectEx8For7'

export default function UseEffectEx7() {
    const [state,setState]=useState(false)

    let handleClick=()=>{
        setState(!state)
    }
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <h2>Unmount Component Example</h2>
      <button onClick={handleClick} className='bg-blue-700 rounded-md p-2 m-4 text-white'>Toggle</button>
      <div>{state?<UseEffectEx8For7/>:"Click Button"}</div>
    </div>
  )
}
