import React, { useEffect, useState } from 'react'

const UserEffectTask2 = () => {
    const [state,setState]=useState({
        h:window.innerHeight,
        w:window.innerWidth
    })
    useEffect(()=>{
        let sizeFun=(e)=>{  
            setState({w:window.innerHeight,h:window.innerWidth})
        }
       window.addEventListener('resize',sizeFun)
        return window.removeEventListener('resize',sizeFun)
    },[])
  return (
    <div>
      <p>Height :{ state.h}  X  Width :{state.w}</p>
    </div>
  )
}

export default UserEffectTask2
