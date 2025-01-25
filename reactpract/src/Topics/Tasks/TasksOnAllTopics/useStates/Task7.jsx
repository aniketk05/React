import React, { useState } from 'react'

const Task7 = () => {
    const [isDark, setIsDark] = useState(false);
  return (
    <div style={{ background: isDark ? "#333" : "#fff", color: isDark ? "#fff" : "#000" }}>
      <button onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default Task7
