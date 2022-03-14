import { Link } from "react-router-dom"

export default () => {
  return (
    <div>
      Ini About
      <Link to={"/"}>
        Ini ke Home
      </Link>
    </div>
  )
}

export const Service = () => {
  return (

    <div>
      Ini Service
      <Link to={"/"}>
        Ini ke Home
      </Link>
    </div>
  )
}