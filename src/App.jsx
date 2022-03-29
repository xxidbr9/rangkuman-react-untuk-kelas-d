import React, { useReducer } from "react";
import { dataBesar } from "./dataBesar";

// ini section Reducer
/* 
useReducer itu sama tugasnya kyak state, tapi ditujukan untuk data yang besar
*/
const initialValue = {
  nilai: 0,
  nama: "nando",
  pekerjaan: "pengangguran"
};

const TAMBAH_UMUR = "tambah-umur";
const TAMBAH_NOMOR_RUMAH = "tambah-nomor-rumah";

// state ini bentuk wadahnya sama dengan initialValue
const reducer = (state, action) => {
  switch (action.type) {
    // case "tambah-nilai":
    //   return {
    //     ...state,
    //     nilai: action.payload
    //   };
    case TAMBAH_UMUR:
      return {
        ...state,
        umur: action.payload
      };
    case TAMBAH_NOMOR_RUMAH:
      return {
        ...state,
        info: {
          account: {
            address: {
              no_rumah: action.payload
            }
          }
        }
      };
    default:
      return state;
  }
};

const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialValue);
  const [state, dispatch] = useReducer(reducer, dataBesar);
  const actionTambahUmur = () => {
    return { type: TAMBAH_UMUR, payload: state.umur + 1 };
  };

  /* 
  const [state, setState] = useState(0)
  kalau di useState ada getter dan setter()
  */
  return (
    <div>
      <h2>App</h2>
      <div>
        {/* <button
          onClick={() =>
            dispatch({ type: "tambah-nilai", payload: state.nilai + 1 })
          }>
          Tambah nilai 1
        </button> */}
        <button onClick={() => dispatch(actionTambahUmur())}>Tambah umur 1</button>
        <button
          onClick={() =>
            dispatch({
              type: TAMBAH_NOMOR_RUMAH,
              payload: state.info.account.address.no_rumah + 1
            })
          }>
          Tambah Nomor Rumah +1
        </button>
      </div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default App;
