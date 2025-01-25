
  import React from 'react'
  
  const Hobbies = ({ hobbies }) => {

    return (
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      );
  }
  
  export default Hobbies
  