import React from 'react'
import AppContext from './AppContext'
import AppContextEx1 from './example/AppContextEx1'
import AppContextEx2 from './example/AppContextEx2'


export default function ContextApiIntro() {
  return (
    <AppContext>
     {/* <AppContextEx1/> */}
     <AppContextEx2/>
    </AppContext>
  )
}
