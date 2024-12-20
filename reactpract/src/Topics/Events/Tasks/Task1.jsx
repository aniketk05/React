import React from 'react'

export default function Task1() {
    let handledClick=(e)=>{
        e.target.disabled=true
        e.target.style.backgroundColor="lightGrey"
        e.target.textContent="Warning now i am disabled"
    }
  return (
    <div className='flex justify-center items-center h-[100vh]'> 
      <button
        onClick={handledClick}
      className='bg-black rounded-md border-[1px] text-white'>
        Think before click....!
      </button>
    </div>
  )
}
