import React from "react";

const UserItem = ({ val, handleUpdate, handleDelete }) => {
    return (
      <article className="m-4 border-[1px] px-3 py-4 border-blue-950 rounded-md">
        <span className="mx-2 my-3 font-bold">id: {val.id}</span>
        <p className="mx-2 my-3 font-semibold">Username: {val.username}</p>
        <p className="mx-2 my-3 font-semibold">Password: {val.password}</p>
        <button
          onClick={() => handleUpdate(val.id)}
          className="mx-2 mt-2 bg-green-500 rounded-md px-2"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(val.id)}
          className="mx-2 mt-2 bg-red-500 rounded-md px-2"
        >
          Delete
        </button>
      </article>
    );
  };

  export default UserItem