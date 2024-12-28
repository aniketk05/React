import React, { createContext, useState } from 'react'

export const myStore=createContext()
const AppContext = ({children}) => {
  const [state,setState]=useState(0);
  let data=[
    {
      name:"cristiano",
      age:39
    },
    {
      name:"Messi",
      age:35
    }
    ,
    {
      name:"Chhetri",
      age:34
    },
    {
      name:"vini",
      age:22
    },
    {
      name:"Valverde",
      age:23
    },
    {
      name:"Toni Kross",
      age:37
    }
  ]
  return (
    // <myStore.Provider value={{state,setState}}>
    //  {children}
    // </myStore.Provider>
    <myStore.Provider value={data}>{children}</myStore.Provider>
  )
}

export default AppContext

