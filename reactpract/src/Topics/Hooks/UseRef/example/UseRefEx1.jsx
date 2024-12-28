import React, { useRef } from 'react'

const UseRefEx1 = () => {
    let heading=useRef()
    let handleClick=()=>{
        // heading.current.style.background="red"
         heading.current.textContent="red"

        
    }
  return (
    <div  className='h-screen flex justify-center items-center flex-col'>
      <h1 className='text-lg rounded-full' ref={heading}>Heading</h1>
      <button  onClick={handleClick} className='bg-blue-500 rounded-md px-2 m-4 text-white'>Click</button>
    </div>
  )
}

export default UseRefEx1
