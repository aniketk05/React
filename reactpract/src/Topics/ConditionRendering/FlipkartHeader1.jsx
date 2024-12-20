import React from 'react'
import style from'./flipkart1.module.css'
export default function FlipkartHeader( props) {
  console.log(props.data.isLoggedIn)
  return (
    <header id={style.header}>
        <article className={style.navLogoSearch}>
          <h1>Logo</h1>
        </article>

        <article className={style.navRight}>
          <div id={style.navMenu} >
          <a href="#" onClick={()=>{
            if(!props.data.isLoggedIn)
              alert(" Login First")
          }}>Home</a>
          <a href="#">Menu</a>
           {
            props.data.isLoggedIn?(
              <a href="#" onClick={()=>{
                props.data.setIsLogedIn(false)
                 console.log()
               }}>Logout</a>
            ):(<>
           
            <a href="#" onClick={()=>{
               props.data.setIsLogedIn(true)
                console.log()
              }}>Login</a>
            <a href="#">Sign up</a>
            </> )
           }
          </div>
        </article>
      
    </header>
  )
}
