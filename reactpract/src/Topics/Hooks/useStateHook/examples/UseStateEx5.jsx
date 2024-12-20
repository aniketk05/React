import React, { useState } from 'react'

export default function UseStateEx5() {
    const cources =useState(["html","css","js","react"])
  return (
    <div>
      {cources.map((e,i)=><li key={i}>{e}</li>)}
    </div>
  )
}
