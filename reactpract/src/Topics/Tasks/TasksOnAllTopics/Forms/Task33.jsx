import React, { useState } from 'react'

const Task33 = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email.includes("@")) {
        setError("Invalid email address");
      } else {
        setError("");
        alert("Registration successful!");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Register</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    );
}

export default Task33
