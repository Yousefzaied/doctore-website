import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <>
    <div className="nave d-flex justify-content-around align-items-center p-3">
            <h2>Admin Profile</h2>
            {/* <Link to={"/register"}> */}
            <button className="btn btn-primary">Dr: Zaied</button>
            {/* </Link> */}
    </div>
    </>
  )
}

export default Navbar