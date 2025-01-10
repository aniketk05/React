import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./component/todoSlice";

const App = () => {
  let [state, setState] = useState({
    todo: "",
    id: null,
  });
  let dispatch = useDispatch();
  let todoList = useSelector((store) => store.todoReducer.todoList);
  console.log(todoList);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleClick = (e) => {
    e.preventDefault();
    dispatch(addTodo({ ...state, id: Date.now() }));
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          onChange={handleChange}
          name="todo"
          value={state.todo}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default App;
