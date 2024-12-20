import React, { useState } from "react";

function EventEx5() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [user,setUser]=useState([])

  let handleChange=(e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
    console.log(state)
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    setUser({...state,user})
    
  }

  return (
    <div className="h-screen justify-center items-center flex">
      <fieldset className="border-[2px] rounded-lg border-black p-8">
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="username"
          name="username"
          type="text"
          className= "p-1 bg-slate-300 border-[1px] border-black rounded-md"
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="password"
          placeholder="password"
          type="text"
          className="p-1 bg-slate-300 border-[1px] border-black rounded-md"
        />
        <br />
        <button className="bg-red-600 my-5 border-[1px] border-black rounded-md p-1 px-2">
          Submit
        </button>
      </form>

      </fieldset>
    </div>
  );
}

export default EventEx5;
