import React from 'react'

const Ex4ForEx3 = ({props}) => {
    
  return (
    <div>
      <button onClick={()=>{
        props(40)
      }}>Click</button>
    </div>
  )
}

export default Ex4ForEx3
