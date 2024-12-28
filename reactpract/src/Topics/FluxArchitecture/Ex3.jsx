import React from 'react'
import Ex4ForEx3 from './Ex4ForEx3'

const Ex3 = () => {
    let demo=(a)=>{
        console.log(a)
    }
  return (
    <div>
      <Ex4ForEx3 props={demo}/>
    </div>
  )
}

export default Ex3
