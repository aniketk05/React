import React, { useState } from 'react'

const Task35 = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(form);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <textarea name="message" placeholder="Message" onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    );
}

export default Task35
