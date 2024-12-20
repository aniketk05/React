import { useState } from "react";

const UserStateEx3 = () => {
  const [changeBackground, setBackground] = useState(false);
  let chanage=()=>{
    if(changeBackground==false)
        setBackground(true)
    else
    setBackground(false)
  }
  return (
    <div>
      <h1
        style={{
          backgroundColor: changeBackground ? "red" : "white",
        }}
      >
        Hello
      </h1>
      {/* <button onClick={()=>setBackground(!changeBackground)}>click</button> */}
      <button onClick={chanage}>click</button>


    </div>
  );
};

export default UserStateEx3;
