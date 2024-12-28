import React, { useEffect } from 'react'

export default function UseEffectEx8For7() {
    let timer=setInterval(()=>{
        console.log("maccha i am waiting to stop ")
    },1000)
    useEffect(()=>{

        return ()=>{
            console.log("machha i am stoped")
            clearInterval(timer)
        }
    },[])
  return (
    <div>
      <h1>Hello Machha</h1>
    </div>
  )
}
