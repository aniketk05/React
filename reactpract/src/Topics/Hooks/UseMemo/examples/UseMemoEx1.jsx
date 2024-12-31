import React, { useMemo, useState } from "react";

const UseMemoEx1 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  
  let checkCount = () => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }

    if (count1 % 2 == 0) return "even";
    else return "odd";
  };

  let memoizedValue=useMemo(checkCount,[count1])
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
        className="bg-blue-500 rounded-md border-black px-3 m-4"
      >
        Count1 :{count1} {memoizedValue}
        {/*   when function directly not called by using useMemo will not get performance issue  */}
        Count1 :{count1} {checkCount()}
        {/*  when fucntion directly called get performance issue  */}
      </button>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
        className="bg-blue-500 rounded-md border-black px-3"
      >
        Count2 :{count2}
      </button>
    </div>
  );
};

export default UseMemoEx1;
