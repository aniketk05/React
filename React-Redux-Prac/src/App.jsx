// import React from "react";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo } from "./component/todoSlice";

// const App = () => {
//   let [state, setState] = useState({
//     todo: "",
//     id: null,
//   });
//   let dispatch = useDispatch();
//   let todoList = useSelector((store) => store.todoReducer.todoList);
//   console.log(todoList);

//   let handleChange = (e) => {
//     let { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };

//   let handleClick = (e) => {
//     e.preventDefault();
//     dispatch(addTodo({ ...state, id: Date.now() }));
//   };

//   return (
//     <div>
//       <form action="">
//         <input
//           type="text"
//           onChange={handleChange}
//           name="todo"
//           value={state.todo}
//         />
//         <button onClick={handleClick}>Add</button>
//       </form>
//     </div>
//   );
// };

// export default App;

import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoSlice from "./component/todoSlice";

const App = () => {
  let dispatch = useDispatch();
  let list = useSelector((store) => {
    return store.todoReducer.list;
  });
  let [state, setState] = useState({
    todo: "",
    id: null,
  });

  let { actions } = todoSlice;
  let { addTodo, deleteTodo, updateTodo } = actions;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleClick = (e) => {
    e.preventDefault();
    if (state.todo.length > 0 && state.id == null)
      dispatch(addTodo({ ...state, id: Date.now() }));
    else if (state.todo.length > 0) dispatch(updateTodo(state));
    setState({
      todo: "",
      id: null,
    });
  };

  let handleDelete = (val) => {
    dispatch(deleteTodo(val.id));
  };

  let handleUpdate = (val) => {
    setState(val);
  };
  return (
    <>
      <div>
        <form action="">
          <input
            type="text"
            name="todo"
            value={state.todo}
            onChange={handleChange}
            placeholder="Add Todo"
          />
          <button onClick={handleClick}>Add Todo</button>
        </form>
      </div>
      <div >
        {Array.isArray(list) &&
          list.length > 0 &&
          list.map((val, i) => {
            return (
              <div key={val.id}>
                <h1>{val.todo}</h1>
                <h1>{val.id}</h1>
                <button
                  onClick={() => {
                    handleUpdate(val);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    handleDelete(val);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default App;
