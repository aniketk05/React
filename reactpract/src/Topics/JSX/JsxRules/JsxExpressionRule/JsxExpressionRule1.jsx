import React from 'react'
//! in jsx expression we cannot write the loop statement we can use only hof except those who can't return
export default function JsxExpressionRule1() {
  return (
    <div>
        <p>in jsx expression we cannot write the loop statement we can use only hof except those who can't return</p>
      <p>
        {console.log("Hellow world...!")}
      </p>
    </div>
  )
}
