import React from 'react'

export default function ColorBox(props) {
    console.log(props.color)
  return (
    <div style={{
        height:"200px",
        width:"200px",
        backgroundColor:props.color
    }}>
      
    </div>
  )
}
