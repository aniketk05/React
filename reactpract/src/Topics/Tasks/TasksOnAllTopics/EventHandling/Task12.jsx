import React from 'react'

const Task12 = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      );
}

export default Task12
