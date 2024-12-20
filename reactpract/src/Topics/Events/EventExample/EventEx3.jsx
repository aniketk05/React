import React, { useState } from 'react'

export default function EventEx3() {
    const [userInput,setUserInput]=useState('')
  return (
    <div>
      
      <form action="">
        <input type="text" className='border-[1px] rounded-md'  onChange={(e)=>{
            // console.log(e.target.value)
            setUserInput(e.target.value)
            console.log(userInput)
        }}/>
        <button className='bg-blue-600 rounded-md'>Click</button>
      </form>
      <h1>{userInput}</h1>
    </div>
  )
}
