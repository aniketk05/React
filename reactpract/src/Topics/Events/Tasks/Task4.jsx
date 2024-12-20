import React from 'react'

export default function Task4() {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <button className='border-[1px] rounded-md'  onContextMenu={()=>{
        alert("Ha! You thought you could outsmart React?")
      }}>Right Click on me</button>
    </div>
  )
}
