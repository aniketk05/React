import React from 'react'

export default function Task2() {
  return (
    <div className='flex justify-center items-center h-[100vh] '>
        <h1 className='bg-red-700 text-[2rem]' onDoubleClick={(e)=>{
            e.target.textContent="Shh! I'm a React developer undercover!"
            e.target.style.backgroundColor="lightgrey"
        }}>Secret Message</h1>
    </div>
  )
}
