import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { paiseDedo } from './main'


const App = () => {
  let paisa=useSelector((store)=>{
    return store.pkReducer.amount
  })
  let makeTransaction=useDispatch()
  let handlePaisa=()=>{
    makeTransaction(paiseDedo(100))
  }
  return (
    <div>
      <h1>paisa : {paisa}</h1>
      <button onClick={handlePaisa}>paisa badhao</button>
    </div>
  )
}

export default App
