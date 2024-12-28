import React, { useContext } from 'react'
import { myStore } from '../AppContext'

const AppContextEx1 = () => {
    let data=useContext(myStore)
    console.log(data)
    let {state,setState}=data
    let handleCount=()=>{
        setState(state+1)
    }
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <h1>Count : {state}</h1>
      <button onClick={handleCount} className='bg-gray-800 rounded-md px-2 m-3 text-white '>click</button>
    </div>
  )
}

export default AppContextEx1
