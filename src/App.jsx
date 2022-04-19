import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const initialDetailPost = {
  userId: 0,
  id: 0,
  title: "",
  body: ""
};

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [detailPost, setDetailPost] = useState(initialDetailPost);
  // const [isLoading, setIsLoading] = useState(true);

  // let umur = 20
  // umur += 1

  const [umur, setUmur] = useState(20);

  // const umur = 20

  // useEffect(() =>{

  // },[umur])

  // useEffect(() => {
  //   axios({
  //     url: "https://jsonplaceholder.typicode.com/posts",
  //     method: "GET"
  //   })
  //     .then(resp => setBlogPosts(resp.data))
  //     .finally(() => setIsLoading(false));
  // }, []);

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   var config = {
  //     method: "get",
  //     url: "https://jsonplaceholder.typicode.com/posts/10",
  //     headers: {}
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // });

  const [inputID, setInputID] = useState(1);
  const _handleEditPost = () => {
    const config = {
      method: "put",
      url: `https://jsonplaceholder.typicode.com/posts/${inputID}`,
      headers: {}
    };

    /* STATUS CODE
    200, 201, 400, 401, 404, 500
    */

    axios(config)
      .then(resp => setDetailPost(resp.data))
  };

  // if (isLoading) {
  //   return <div>Loading ....</div>;
  // }

  const _handleVanillaJS = () =>{
    const dom = document.getElementById("ini_data")
    dom.innerText = 'haha'
  }

  return (
    <div>
      <div>{umur}</div>
      <button
        onClick={() => setUmur(umur+1)}>
        Tambah Umur
      </button>
      <button onClick={_handleVanillaJS}>Ganti Data</button>
      <div id="ini_data">

      </div>
      {/* <input type='text' onChange={input => setInputID(input.target.value)} />
      <button onClick={_handleEditPost}>Run Edit</button>
      <pre>{JSON.stringify(detailPost, null, 2)}</pre> */}
      {/* {blogPosts.length === 0 && <div>Data Kosong</div>}
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
