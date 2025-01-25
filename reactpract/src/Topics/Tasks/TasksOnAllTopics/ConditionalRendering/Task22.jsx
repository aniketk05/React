import React from 'react'

const Task22 = () => {
    
    return (
        <div>
          {weather === "sunny" && <p>It's a bright and sunny day!</p>}
          {weather === "rainy" && <p>Don't forget your umbrella!</p>}
          {weather === "cloudy" && <p>It looks a bit gloomy outside.</p>}
        </div>
      );
}

export default Task22
