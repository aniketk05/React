import React from "react";
import UserItem from "./UserItem";


const UserList = ({ users, handleUpdate, handleDelete }) => {
    return (
      <div className="flex flex-wrap justify-center items-center">
        {users.map((val, i) => (
          <UserItem
            key={i}
            val={val}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    );
  };

  export default UserList