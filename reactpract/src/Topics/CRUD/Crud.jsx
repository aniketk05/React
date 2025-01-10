import React, { useState } from "react";

const Crud = () => {
  let [state, setState] = useState({
    usename: "",
    password: "",
    id: Date.now(),
    users: [],
  });
  let { username, password, id, users } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleClick = (e) => {
    e.preventDefault();
    let temp = {
      username: username,
      password: password,
      id: id,
    };
    setState({
      username: "",
      password: "",
      id: Date.now(),
      users: [...users, temp],
    });
    console.log(state);
  };

  let handlUpdate = (id) => {
    const updatedUsers=users.filter((val)=>{
        return val.id!==id
    })

    let itemsToUpdate=users.find((val)=>{
        return val.id==id
    })

    setState({
        username:itemsToUpdate.username,
        password:itemsToUpdate.password,
        id:itemsToUpdate.id,
        users:updatedUsers
    })
  };

  let handleDelete = (id) => {
    const updatedUsers = users.filter((val) => {
      return val.id !== id;
    });
    setState({...state,users:updatedUsers})
  };

  return (
    <div className="flex  items-center  flex-col">
      <form
        action=""
        className="bg-slate-500 rounded-md h-[200px] w-[400px] flex  items-center flex-col"
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleChange}
          className="border-[1px] border-black rounded-md px-3 m-3"
        />

        <input
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
          className="border-[1px] border-black rounded-md px-3"
        />

        <button
          onClick={handleClick}
          className="bg-blue-500 rounded-md px-3 m-2  border-[1px] border-gray-700 shadow-xl"
        >
          Submit
        </button>
      </form>
      <hr />
      <br />

      <div className="flex flex-wrap justify-center items-center">
        {users.length > 0 &&
          users.map((val, i) => {
            return (
              <article
                className="m-4 border-[1px] px-3 py-4 border-blue-950 rounded-md"
                key={i}
              >
                <span className="mx-2 my-3 font-bold">id: {val.id}</span>
                <p className="mx-2 my-3 font-semibold">
                  Username: {val.username}
                </p>
                <p className="mx-2 my-3 font-semibold">
                  Password: {val.password}
                </p>
                <button
                  onClick={() => {
                    handlUpdate(val.id);
                  }}
                  className="mx-2 mt-2 bg-green-500 rounded-md px-2 "
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    handleDelete(val.id);
                  }}
                  className="mx-2 mt-2 bg-red-500 rounded-md px-2 "
                >
                  Delete
                </button>
              </article>
            );
          })}
      </div>
    </div>
  );
};

export default Crud;
