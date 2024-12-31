import React, { useReducer } from "react";

const UseReducerEx1 = () => {
  let IntialState = 0;
  let reducer = (state, action) => {
    switch (action) {
      case "add":
        return state + 1;
        break;
      case "sub":
        return state - 1;
        break;
      default:
        state;
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, IntialState);
  return (
    <div className="flex h-screen justify-center items-center">
      <h1>Count : {state}</h1>

      <button
        className="bg-blue-500 rounded-md mx-2 px-3 text-white"
        onClick={() => {
          dispatch("add");
        }}
      >
        Add
      </button>
      <button 
        className="bg-blue-500 rounded-md px-3 text-white"
        onClick={() => {
          dispatch("sub");
        }}
      >
        Sub
      </button>
    </div>
  );
};

export default UseReducerEx1;
