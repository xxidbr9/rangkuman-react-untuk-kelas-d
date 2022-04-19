import React, { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

const getSiswa = gql`
  query AmbilSiswa {
    siswa {
      alamat
      id
      nama
      tanggal_lahir
    }
  }
`;

const addNewSiswa = gql`
  mutation addSiswa($nama: String, $alamat: String, $tanggal_lahir: date, $email:String) {
    insert_siswa(
      objects: { nama: $nama, alamat: $alamat, tanggal_lahir: $tanggal_lahir }
    ) {
      returning {
        id
        nama
      }
    }
  }
`;
const Home = () => {
  const { loading, data } = useQuery(getSiswa);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [file, setFile] = useState(null);
  const [addSiswa, { data: dataMutasi, loading: loadingMutasi }] =
    useMutation(addNewSiswa);

  useEffect(() => {
    console.log(file);
  }, [file]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <input type='text' onChange={i => setNama(i.target.value)} />
      <input type='text' onChange={i => setAlamat(i.target.value)} />
      <input type='date' onChange={i => setTanggalLahir(i.target.value)} />
      <input
        type='file'
        name=''
        id=''
        onChange={file => setFile(file.target.files)}
      />
      <button
        onClick={() =>
          addSiswa({
            variables: {
              nama,
              alamat,
              tanggal_lahir: tanggalLahir
            }
          })
        }>
        Tambah Siswa
      </button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
