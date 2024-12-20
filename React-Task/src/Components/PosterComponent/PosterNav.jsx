import React from 'react'

export default function PosterNav() {
  return (
    <nav id='posterNav'>
        <div>
            <p>Business <br /> Webinar</p>
        </div>
        <div>
            <a href="#">Home</a>
            <a href="#">Campaign</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <div id='navSearch'>
            <span>🔍</span>
            <input type="text" />
        </div>
      
    </nav>
  )
}
