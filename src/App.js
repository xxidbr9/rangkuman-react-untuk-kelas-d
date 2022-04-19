import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import { useState } from "react";

function ButtonTambah(props) {
  return (
    <button onClick={() => props.setNilai(props.nilai + 1)}>
      Tambah Nilai
    </button>
  );
}

function App() {
  const [nilai, setNilai] = useState(0);

  return (
    <div className='App'>
      <div>Ini Nilai Total : {nilai}</div>
      <Button
        total='100'
        nilaiTotal={nilai}
        nama='nando'
        children={"Ini Button"}
        rubahNilai={setNilai}
        // pasNgeClick={() => setNilai(nilai -1)}
      />

      <ButtonTambah nilai={nilai} setNilai={setNilai}></ButtonTambah>
    </div>
  );
}

export default App;
