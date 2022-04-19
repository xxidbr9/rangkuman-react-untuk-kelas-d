import { gql } from "@apollo/client";

const siswaQuery = gql`
  query AmbilSiswa {
    siswa {
      alamat
      id
      nama
      tanggal_lahir
    }
  }
`;

export default siswaQuery;
