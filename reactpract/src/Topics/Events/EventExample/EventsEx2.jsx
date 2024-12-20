import React from "react";

export default function EventsEx2() {
  return (
    <div>
      <button
        className="bg-yellow-400 rounded-md border-[1px]"
        onClick={(e) => {
          e.target.textContent = "You Clicked Machha";
          e.target.style.backgroundColor = "red";
        }}
      >
        Click Me !!!
      </button>
    </div>
  );
}
