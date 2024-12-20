import React, { useState } from 'react'
import FlipkartHeader from './FlipkartHeader1'
import Home from './Home'
import ConditionalEx1 from './Example/ConditionalEx1'
import ConditionalEx2 from './Example/ConditionalEx2'

export default function ConditionalRendering() {
    const [isLoggedIn,setIsLogedIn]=useState(false)
  return (
    <div>
      {/* <FlipkartHeader data={{isLoggedIn,setIsLogedIn}}/> */}  
      {/* <Home/> */}
      {/* <ConditionalEx1/> */}
      <ConditionalEx2/>
    </div>
  )
}
