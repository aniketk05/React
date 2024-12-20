import React, { useState } from "react";

//! in useState the whole component will refresh

// assume useState internaly
// let usMyState=(a)=>{
//     let setMyState=(a)=>{
//         //? modify current state
//     }
//     return [a,setMyState]
// }

// let val=usMyState(0)
// console.log(val)
// let [myState,setMyState]=usMyState(0)
// console.log(myState)


export default function UseStateEx1(){
    // let a=useState()
    // let [x,y]=a

    // let [c,d]=useState()

    let [state,setState]=useState(0);

    return(
        <div>
            <h1>Use State Example 1</h1>
            <h2>count = {state} </h2>
            <button onClick={()=>{ setState(state+1)}}> increment</button>

        </div>
    );
}