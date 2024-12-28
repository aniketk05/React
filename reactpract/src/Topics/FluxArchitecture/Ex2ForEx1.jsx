import React from 'react'

const Ex2ForEx1 = ({props}) => {
    let a=200
    console.log(props)
  return (
    <div>
        <h1>Count : {props.state}</h1>
        <button onClick={()=>{
            props.setState(a)
        }}>Click</button>
      
    </div>
  )
}

export default Ex2ForEx1
