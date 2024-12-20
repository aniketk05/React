import React from 'react'
import Home from '../Home';
import NotFound from '../NotFound';
import Contact from '../Contact';
import About from '../About';

export default function ConditionalEx2() {
    
    let pageName=prompt("Enter Page Name")
    if(pageName =="home"|| pageName=="contact"||pageName=="about")
    {let Username=prompt("Enter username")}
    switch (pageName) {
        case "home":
            return <Home Username={Username} />
        break;
        case "contact":
            return <Contact Username={Username}/>
        break;
        case "about":
            return <About Username={Username}/>
    
        default:
            return <NotFound/>
            break;
    }
  return (
    <div>
       
    </div>
  )
}
