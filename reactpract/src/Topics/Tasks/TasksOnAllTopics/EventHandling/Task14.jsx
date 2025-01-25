import React, { useState } from 'react'

const Task14 = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"} Paragraph
        </button>
        {isVisible && <p>This is a paragraph!</p>}
      </div>
    );
}

export default Task14
