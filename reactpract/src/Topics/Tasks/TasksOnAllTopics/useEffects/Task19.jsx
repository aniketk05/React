import React, { useEffect, useState } from 'react'

const Task19 = () => {
    const [visited, setVisited] = useState(false);

    useEffect(() => {
      setVisited(true);
    }, []);
  
    return <p>{visited && "Welcome Back!"}</p>;
}

export default Task19
