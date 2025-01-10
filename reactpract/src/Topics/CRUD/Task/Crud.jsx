import { useState } from "react";
import HandleChange from "./HandleChange";
import HandleClick from "./HandleClick";
import HandleDelete from "./HandleDelete";
import HandleUpdate from "./HandleUpdate";
import UserForm from "./UserForm";
import UserList from "./UserList";

const Crud = () => {
    const [state, setState] = useState({
      username: "",
      password: "",
      id: Date.now(),
      users: [],
    });
  
    const handleChange = HandleChange({ state, setState });
    const handleClick = HandleClick({ state, setState });
    const handleUpdate = HandleUpdate({ state, setState });
    const handleDelete = HandleDelete({ state, setState });
  
    return (
      <div className="flex items-center flex-col">
        <UserForm
          handleChange={handleChange}
          handleClick={handleClick}
          username={state.username}
          password={state.password}
        />
        <hr />
        <UserList
          users={state.users}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    );
  };

  export default Crud