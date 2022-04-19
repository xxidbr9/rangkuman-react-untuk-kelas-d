import { gql } from "@apollo/client";

const q = gql`
  query MyQuery {
    keterangan {
      nilai
      pelajaran
      id
      status
    }
  }
`;

export default q