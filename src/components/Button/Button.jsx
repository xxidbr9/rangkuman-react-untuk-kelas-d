import React from "react";

const Button = ({ pasNgeClick, rubahNilai, ...props }) => {
  console.log(props);

  const arr = [1, 2, 4, 5, 6];
  // const nilai1 = arr[0]
  // ... => nilai sisa
  const [nilai1, nilai2, ...nilai] = arr;
  console.log(nilai1, nilai2, nilai);

  const siswa = {
    nama: "nando",
    umur: 23,
    alamat: "solo",
    nilai: {
      agama: 20,
      mtk: 30
    }
  };

  // destructuring buat object
  const { umur, nama: namaSiswa, ...sisa } = siswa;
  console.log("umur ", umur);
  console.log("nama ", namaSiswa);
  console.log("sisa ", sisa);

  console.log(siswa.alamat);

  // ini merubah nama key
  const { nilaiTotal: jumlahNilai } = props;

  const jalan = () => console.log("ini jalan");
  // jalan()
  return (
    <button
      {...props}
      style={{ color: props.color }}
      data-test-id='btn'
      // onClick={pasNgeClick}
      onClick={() => rubahNilai(jumlahNilai - 1)}>
      {props.children}
    </button>
  );
};

export default Button;
