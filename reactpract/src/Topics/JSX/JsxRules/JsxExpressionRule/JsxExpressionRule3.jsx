import React from 'react'

export default function JsxExpressionRule3() {
    //! in jsx expression we cannot write the loop statement we can use only hof except those who can't return

    let names=['cristiano','chhetri','messi','neymar','vini','vida']
  return (
    <div>
      <h1>Jsx Expression Rule 3</h1>
      {/* <p>the names od the students are {names.map((e,i)=>
        <React.Fragment key={i}>{e}</React.Fragment>
      )}</p> */}
      <p>the names od the students are {names.filter((e,i)=>
      e.endsWith('a')&&<React.Fragment key={i}>{e}</React.Fragment>
      )}</p>
    </div>
  )
}
