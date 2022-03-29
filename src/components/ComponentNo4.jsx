import React, { useContext } from "react";
import { ContextGlobal } from "../AppDenganContext";

const ComponentNo4 = ({ count }) => {
  // useContext, yang ada di dalam value sebuah ContextGlobal.Provider
  const nilaiDariApp = useContext(ContextGlobal);

  return (
    <div>
      <span>Hallo Dari ComponentNo4</span>
      <p>Ini Component 4 : {count}</p>
      <p>Ini nilai dari Context :{nilaiDariApp.nilai}</p>
      <button
        onClick={() =>
          nilaiDariApp.setNilai(nilaiSebelumnya => nilaiSebelumnya + 20)
        }>
       Component 4 Tambah 20
      </button>
    </div>
  );
};

export default ComponentNo4;
