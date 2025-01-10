import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <nav style={{
        background:"lightGray",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"50px",
       

      }}>
        <Link style={{ textDecoration:"none",
          margin:"0px 20px 0px 20px",
          color:"Black"
        }} to="/home">Home</Link>
        <Link 
        style={{ textDecoration:"none",
          margin:"0px 20px 0px 20px",
          color:"Black"
        }} 
        to="/about">About</Link>
        <Link 
        style={{ textDecoration:"none",
          margin:"0px 20px 0px 20px",
          color:"Black"
        }} 
        to="/contact">Contact</Link>
      </nav>
      <br />
      
    </div>
  )
}

export default App
