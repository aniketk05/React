import React, { useState } from 'react'

const HocEx1 = () => {
    const [state,setState]=useState(0)
    console.log("parent")
  return (
    <div>
      <p>Parent</p>
      <button className='bg-blue-500 rounded-md  text-white px-3' onClick={()=>{setState(state+1)}}>state: {state}</button>
    </div>
  )
}

export default HocEx1
