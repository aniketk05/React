import React, { useEffect, useState } from 'react'

const Task16 = () => {
    const [joke, setJoke] = useState("");

    useEffect(() => {
      fetch("https://official-joke-api.appspot.com/jokes/ten")
        .then((response) => response.json())
        .then((data) => setJoke(data.value));
    }, []);
  
    return (
<div>
  <div>{joke.map((val)=>{
    return(
      <div key={val.id}>
        <p>val.setup</p>
        <p>val.punchline</p>
      </div>

    )
  })}</div>;

</div>
    )
    
}

export default Task16
