import React, { useEffect, useState } from "react";

const UseEffectTask1 = () => {
  const [users, setUsers] = useState([]);
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if(!res.ok) throw new Error("failed to fetch")
        return res.json()})
      .then((data) => setUsers(data)).catch(err=>setError(err)).finally(()=>setLoading(false));
  }, []);
  
  if (loading) return <p className="flex h-screen justify-center items-center text-2xl">Loading...</p>
  if (error) return <p>Error : {error}</p>

  return (
    <div className="flex h-screen justify-center items-center">
      <ul>{
        users.map(e=>{
          return(
            <li key={e.id} >{e.name} - {e.email}</li>
          )
        })
        } </ul>
    </div>
  );
};

export default UseEffectTask1;
