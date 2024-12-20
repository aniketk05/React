import React, { useState } from "react";
import Child from "./example/Child";
import CounterProp from "./example/CounterProp";
import ColorBox from "./example/ColorBox";
import Home from "./PropsDrilling/Home";
import PropsEx1 from "./example/PropsEx1";
import PropsEx2 from "./example/PropsEx2";

export default function PropIntro() {
  // const obj={
  //     name:"cristiano",
  //     mobile:7777,
  //     job:"footballer"
  // }
  // const arr=['mango','apple','orange']

  // const [counter,setCounter]=useState(0);
  // let count=()=>{
  //     setCounter(counter+1)
  // }
  return (
    <>
      {/* <Child name="Cristiano" mobile="77777"></Child>  */}
      {/* <Child data={obj}></Child> */}
      {/* <Child array={arr}></Child> */}
      {/* {counter}
        <CounterProp data={count}/> */}
      {/* <CounterProp data={count}>yvuohdv</CounterProp> */}
      {/* <ColorBox color="green"/>
          <ColorBox color="red"/>
          <ColorBox color="blue"/> */}

      {/*//! Props Drilling  */}
      {/* <Home/> */}

      {/* //! Props Practise  */}
      {/* <PropsEx1/> */}
      <PropsEx2/>
    </>
  );
}
