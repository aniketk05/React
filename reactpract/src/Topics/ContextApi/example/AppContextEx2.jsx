import React, { useContext } from "react";
import { myStore } from "../AppContext";

const AppContextEx2 = () => {
  let data = useContext(myStore);
  return (
    <div>
      <table>
        <tr className="border-[1px] border-black p-3">
          <th className="border-[1px] border-black p-3">name</th>
          <th className="border-[1px] border-black p-3">age</th>
          </tr>
          <tbody className="border-[1px] border-black p-3">
            {Array.isArray(data) > 0 &&
              data.map((e, i) => {
                return (
                  <tr key={i}>
                    <td className="border-[1px] border-black p-3">{e.name}</td>
                    <td className="border-[1px] border-black p-3">{e.age}</td>
                  </tr>
                );
              })}
          </tbody>
      </table>
    </div>
  );
};

export default AppContextEx2;
