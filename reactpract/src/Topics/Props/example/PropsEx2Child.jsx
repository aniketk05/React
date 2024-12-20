import React from 'react'

export default function PropsEx2Child({children}) {
    console.log(children)
    let myDiv=React.createElement('div',{id:"myDiv"},React.createElement('section',{title:"this is section"},React.createElement('p',null,"text")))
  return (
    <div>
      Props example2 child {myDiv}
        {children}
    </div>
  )
}
