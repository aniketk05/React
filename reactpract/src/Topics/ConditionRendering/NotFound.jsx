import React, { useState } from 'react'

export default function NotFound() {
    const [theme,setTheme]=useState('light');
  return (
    <div style={theme=='light'?{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}:{background:"black",color:"white",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1>
      404 Page Not Found
        </h1>
        <button style={{background:theme=='light'?"white":"black",border:"none",fontSize:"3rem"}} onClick={()=>{
            theme=='light'?setTheme('dark'):setTheme('light')
        }} >{theme=='light'?'☀️':'🌙'}</button>
    </div>
  )
}
