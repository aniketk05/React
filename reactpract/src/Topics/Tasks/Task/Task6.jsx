import React, { useState } from "react";

const Task6 = () => {
  const [step, setStep] = useState(1);
  const [state, setState] = useState({
    username: "",
    email: "",
  });
  
  

  let handleClick = () => {
    setStep(step + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {step === 1 && (
        <div>
          <input
            name="username"
            type="text"
            placeholder="Enter Your Name"
            className="rounded-md border-[1px] border-black"
            onChange={(e)=>{setState({...state,username:e.target.value})}}
            value={state.username}
          />
          <button
            className="bg-blue-500 rounded-md px-3 mx-4 text-white border-[1px]"
            onClick={handleClick}
          >
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="rounded-md border-[1px] border-black"
            onChange={(e)=>{setState({...state,email:e.target.value})}}
            value={state.email}
          />
          <button
            className="bg-blue-500 rounded-md px-3 mx-4 text-white border-[1px]"
            onClick={handleClick}
          >
            Next
          </button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Confirmation</h2>
          <p>Name : {state.username}</p>
          <p>Email : {state.email}</p>
        </div>
      )}
    </div>
  );
};

export default Task6;
