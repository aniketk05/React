import React, { useRef, useState } from 'react'

const UseRefEx2 = () => {

    let [state,setState]=useState("")
    let inputRef=useRef()
    let handleClick=(e)=>{
        e.preventDefault()
        setState(inputRef.current.value)
    }
  return (
    <div>
        <form action="">
            <input type="text" ref={inputRef} className='border-black border-2 rounded-md' />
            <button className='bg-blue-500 rounded-md text-white px-3 m-2' onClick={handleClick}>Click</button>
        </form>

        <h1>{state}</h1>
      
    </div>
  )
}

export default UseRefEx2

