import React, { useState } from "react";

function EventEx4() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  let handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
      
    }
    )
    console.log(state)
  };
  return (
    <div className="h-screen flex justify-center items-center">
        <form action="">
      <input
        type="text"
        name="username"
        className="bg-slate-500 border-[1px] rounded-md text-white"
        onChange={handleChange}
        value={state.username}
        />

      <br />
      <br />
      <input
        type="password"
        name="password"
        value={state.password}
        className="bg-slate-500 border-[1px] rounded-md text-white"
        onChange={handleChange}
        
        />

      <button className="bg-slate-300 border-[1px] rounded-lg border-black">
        Click
      </button>
      <br /><br />
      <h1 className="text-[2rem] font-bold">{state.username} X {state.password}</h1>
        </form>
    </div>
  );
}

export default EventEx4;
