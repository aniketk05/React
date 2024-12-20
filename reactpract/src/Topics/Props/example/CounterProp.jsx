import React from 'react'

export default function CounterProp(props) {
    console.log(props)
    console.log(props.children)
  return (
    <div>
        
      <button onClick={()=>{props.data()}}>click</button>
    </div>
  )
}
