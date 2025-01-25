import React, { useState } from 'react'

const Task21 = () => {
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => setIsLoggedIn(true);
  
    return isLoggedIn ? (
      <h1>Welcome, {username}!</h1>
    ) : (
      <div>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
}

export default Task21
