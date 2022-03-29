import { useState, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentNo1 from "./components/ComponentNo1";

// useContext
// context itu adalah : data dari sebuah react, yang bisa di akses global, atau diluar dari componentnya
// nama context / key terserah
export const ContextGlobal = createContext(null);

function App() {
  const [count, setCount] = useState(0);

  // reducer
  return (
    <ContextGlobal.Provider value={{ nilai: count, setNilai: setCount }}>
      <ComponentNo1 count={count} />
      <button onClick={() => setCount(prev => prev + 1)}>Tambah 1</button>
    </ContextGlobal.Provider>
  );
}

export default App;
