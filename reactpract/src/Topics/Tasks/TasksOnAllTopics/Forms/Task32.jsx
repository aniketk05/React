import React, { useState } from 'react'

const Task32 = () => {
    const [feedback, setFeedback] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Feedback submitted: ${feedback}`);
      setFeedback("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
}

export default Task32
