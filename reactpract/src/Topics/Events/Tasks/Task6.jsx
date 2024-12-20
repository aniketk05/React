import React, { useState } from "react";

export default function Task6() {
  let [posTop, setPosTop] = useState("50%");
  let [posLeft, setPosLeft] = useState("50%");
  return (
    <div className="flex h-[100vh] ">
      <button
        onMouseEnter={(e) => {
          const randomTop = Math.random() * 80 + 10;
          const randomLeft = Math.random() * 80 + 10;
          setPosTop(`${randomTop}%`);
          setPosLeft(`${randomLeft}%`);
          e.target.style.top = posTop;
          e.target.style.left = posLeft;
        }}
        className="border-[1px] rounded-md h-10 bg-red-500 relative"
      >
        Catch me if you can
      </button>
    </div>
  );
}
