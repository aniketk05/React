import React from "react";

const UserForm = ({ handleChange, handleClick, username, password }) => {
  return (
    <form className="bg-slate-500 rounded-md h-[200px] w-[400px] flex items-center flex-col">
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
        className="bg-blue-500 rounded-md px-3 m-2 border-[1px] border-gray-700 shadow-xl"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm