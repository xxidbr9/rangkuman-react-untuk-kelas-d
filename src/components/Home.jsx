import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      ini home
      <Link to={"/service"}>
        Ini ke About
      </Link>
    </div>
  )
}


export default Home