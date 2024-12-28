import React, { useState } from 'react'
import Ex2ForEx1 from './Ex2ForEx1'

const Ex1 = () => {
    let [state,setState]=useState(0)
  return (
    <div>
      <Ex2ForEx1 props={{state,setState}}></Ex2ForEx1>
    </div>
  )
}

export default Ex1
