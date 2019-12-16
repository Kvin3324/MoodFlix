import React from "react";
import MoviesStyled from "../Feed/MoviesHome/MoviesStyled.style";
import { Link } from "react-router-dom";


function Movie(props) {
  return (
    <React.Fragment>
      <MoviesStyled className="movie">
        <Link to={`/aboutMovie/${props.movie.id}`}>
          <div className="movie--body mr-5">
            <div className="movie--img">
              {
                function () {
                  if (props.movie.poster_path === null) {
                    return <img src="https://citainsp.org/wp-content/uploads/2016/01/default.jpg" alt="no__poster"></img>
                  } else {
                    return <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="poster" />
                  }
                }()
              }
            </div>
            <div className="movie--title">
              {
                function () {
                  if (props.movie.title.length > 20) {
                    return <h2>{props.movie.title.substr(0, 10)}(...)</h2>
                  } else {
                    return <h2>{props.movie.title}</h2>
                  }
                }()
              }
            </div>
          </div>
        </Link>
      </MoviesStyled>
    </React.Fragment>
  )
}

export default Movie