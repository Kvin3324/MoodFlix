import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import NavbarStyled from "./NavbarStyled.style";

function Navbar() {
  const [data, setData] = useState({
    token: "",
  })

  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`)
  //   .then(response => response.json())
  //   .then(dataParsed => setData({
  //     token: dataParsed.request_token,
  //     })
  //   )
  // }, [])

  

  function createToken() {
    fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`)
      .then(response => response.json())
      .then(dataParsed => {
        window.location.href = `https://www.themoviedb.org/authenticate/${dataParsed.request_token}?redirect_to=${window.location.href}createSession`;
        window.localStorage.setItem("token", dataParsed.request_token);
        // window.location.href = `https://www.themoviedb.org/authenticate/${dataParsed.request_token}?redirect_to=http://localhost:3000/createSession`;
        }
      )
  }


  console.log(data.token);



  return (
    <React.Fragment>
      <NavbarStyled className="navbar">
        <div className="navbar--session">
          {
            function () {
              if (data.length === 0) return "loading";

              if (data.length !== 0) {
                return(
                  <>
                  <Link to={"/login"}>
                    <li>login</li>
                  </Link>
                  <li onClick={createToken}>create an account</li>
                  </>
                  )
              }
            }()
          }
        </div>
      </NavbarStyled>
    </React.Fragment>
  )
}

export default Navbar