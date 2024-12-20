import React from 'react'
import UseStateEx1 from './examples/UseStateEx1'
import UseStateEx2 from './examples/UseStateEx2'
import UserStateEx3 from './examples/UseStateEx3'
import UseStateEx4 from './examples/UseStateEx4'
import UseStateEx5 from './examples/UseStateEx5'

//! what is Hook
// Hooks are nothing but the inbuild methods or functions.
// Hooks name starts with use 
// i.e. useState(),useEffect(),useContext(),useDispatch(),useReducer(),useCallBack(),useMemo()
// we can create any function and will name it usrXYZ. such functions can be treated as -- Custom Hooks --
// i.e. let useAddtion =(a,b)=>{ return a+b}

export default function UseStateIntro() {
  return (
    <div>
        {/* <UseStateEx1/> */}
        {/* <UseStateEx2/> */}
        {/* <UserStateEx3/> */}
        {/* <UseStateEx4/> */}
        <UseStateEx5/>

      
    </div>
  )
}
