import React, { useState } from "react";

function EventEx5() {
  const [state,setState]=useState({
    username:"",
    password:"",
    id: Date.now(),
    users:[]
  })
  let {username,password,id,users}=state
  let handleChange = (e) => {
      let {name,value}=e.target
      setState({...state,[name]:value})
  };
  let handleSubmit=(e)=>{
    e.preventDefault()
    let tempObj={
      username:state.username,
      password:state.password,
      id:state.id
    }
    setState({
      username:"",
      password:"",
      id:Date.now(),
      users:[...users,tempObj]
    })
    console.log(state)
  }
  return (
    <div>
      <form
        action=""
        className="flex p-10 items-center justify-center flex-col  bg-stone-200 "
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={username}
          placeholder="username"
          className="border-[1px] border-[1px] rounded-md bg-slate-300 px-2 py-1 border-black"
          required
        />
        <input
          onChange={handleChange}
          type="text"
          name="password"
          value={password}
          placeholder="password"
          className="border-[1px] border-[1px] rounded-md bg-slate-300 px-2 py-1 m-3 border-black"
          required
        />
        <button className="bg-blue-400 rounded-md border-[1px] border-black text-white px-2 py-1  m-4">
          Create
        </button>
      </form>
      
      <hr className="border-black" />
      <br />

      <h1>Users</h1>

      <div>
        {users.length>0&& users.map((val,i)=>{
          <table key={i}>
            <tbody>
              <tr>
                <td>{val.id}</td>
                <td>{val.username}</td>
                <td>{val.password}</td>
              </tr>
            </tbody>
          </table>
        })}
      </div>
    </div>
  );
}

export default EventEx5;
