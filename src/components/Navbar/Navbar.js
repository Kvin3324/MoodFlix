import React from "react";
import {Link} from "react-router-dom";
import NavbarStyled from "./NavbarStyled.style";

function Navbar() {
  return (
    <React.Fragment>
      <NavbarStyled className="navbar">
        <div className="navbar--session">
          <Link to={"/login"}>
            <li>login</li>
          </Link>
          <Link to={"/createSession"}>
            <li>create an account</li>
          </Link>
        </div>
      </NavbarStyled>
    </React.Fragment>
  )
}

export default Navbar