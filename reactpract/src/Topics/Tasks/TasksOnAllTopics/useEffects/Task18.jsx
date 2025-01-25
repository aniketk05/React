import React, { useEffect, useState } from 'react'

const Task18 = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setCoords({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
  
    return (
      <p>
        Mouse Position: {coords.x}, {coords.y}
      </p>
    );
}

export default Task18
