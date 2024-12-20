import React from "react";
import Home from "../Home";
import NotFound from "../NotFound";

export default function ConditionalEx1() {
  // localStorage.setItem('username','abc@123')
  let uName = localStorage.getItem("username");
  // console.log(uName)
  if (uName == "abc@12") return <Home />;
  return <NotFound />;
}
