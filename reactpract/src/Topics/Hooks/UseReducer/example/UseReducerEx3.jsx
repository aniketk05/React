import React, { useReducer } from 'react'

const UseReducerEx3 = () => {
   let IntialState = {
    count : 0
   };
      let reducer = (state, action) => {
        switch (action.type) {
          case "add":
            return {count : state.count+1};
            break;
          case "sub":
            return {count : state.count-1};
            break;
          default:
            state;
            break;
        }
      };
      const [state, dispatch] = useReducer(reducer, IntialState);
      return (
        <div className="flex h-screen justify-center items-center">
          <h1>Count : {state.count}</h1>
    
          <button
            className="bg-blue-500 rounded-md mx-2 px-3 text-white"
            onClick={() => {
              dispatch({type :"add",value:10});
            }}
          >
            Add
          </button>
          <button 
            className="bg-blue-500 rounded-md px-3 text-white"
            onClick={() => {
              dispatch({type :"sub",value:5});
            }}
          >
            Sub
          </button>
        </div>
      );
}

export default UseReducerEx3
