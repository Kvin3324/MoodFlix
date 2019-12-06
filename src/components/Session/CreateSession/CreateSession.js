import React, { useState, useEffect } from "react";

function CreateSession() {
  const [data, setData] = useState({
    token: window.localStorage.getItem("token"),
    username: null,
    password: null,

  });

  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?=${process.env.REACT_APP_API_KEY_MOVIES}`)
  //   .then(response => response.json())
  //   .then(dataParsed => setData({
  //     token: dataParsed.request_token
  //   }))
  // }, [])

    function handleChangeInputUsername(el) {
      const newState = {...data};

      newState.username = el.target.value;
      setData(newState)
    }

    function handleChangeInputPassword(el) {
      const newState = {...data};

      newState.password = el.target.value;
      setData(newState)
    }

    console.log(data);
    console.log(window.localStorage.getItem("token"));
    
    function submitForm(e) {
      e.preventDefault()
        fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`, {
          method: 'POST',
          body: JSON.stringify(
            {
              username: data.username,
              password: data.password,
              request_token: data.token
            }
          )
        })
        .then(response => console.log(response))
        .then(dataParsed => {
          fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`, {
            method: 'POST',
            body: JSON.stringify({request_token: data.token})
          })
          .then(response => response.json())
          .then(session => {
            window.localStorage.setItem("sessionId", session.session_id);
          })
        })
        .catch(error => alert(error));
    }


    // function goTo() {
    //   const HTTPBody = {
    //     username: data.username,
    //     password: data.password,
    //     request_token: data.token
    //   }
    //     fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`, {
    //       method: 'POST',
    //       body: JSON.stringify(HTTPBody)
    //     })
    //     .then(response => response.json())
    //     .then(dataParsed => {
    //       fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`, {
    //         method: 'POST',
    //         body: JSON.stringify(HTTPBody.request_token)
    //       })
    //       window.localStorage.setItem("sessionId", dataParsed.session_id);
    //     })
    //     .catch(error => alert(error));
    //   // window.location.href = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`;
    //   // window.location.href = `https://www.themoviedb.org/authenticate/${data.token}?redirect_to=http://localhost:3000/#/approved      `

    // }

  return (
    <React.Fragment>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="exampleInputUsername">Username</label>
          <input type="username" className="form-control" id="exampleInputUsername" placeholder="Enter username" onChange={handleChangeInputUsername} />
        </div>
        {/* <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div> */}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required onChange={handleChangeInputPassword}/>
        </div>
        {/* <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" required />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        {/* <button type="submit" className="btn btn-primary" onClick={goTo} >Submit</button> */}
        <input type="submit" value="submit"/>
      </form>
    </React.Fragment>
  )
}

export default CreateSession