import React from "react";
import MoviesStyled from "../Feed/MoviesHome/MoviesStyled.style";
import { Link } from "react-router-dom";


function Movie(props) {
  return (
    <React.Fragment>
      <MoviesStyled className="movie mr-5" onClick={props.toggleClass}>
        <Link to={`/about/${props.movie.id}`}>
          <div className="movie--body mr-5">
            <div className="movie--img">
              <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="poster" />
            </div>
            <div className="movie--title">
              <h2>{props.movie.title}</h2>
            </div>
          </div>
        </Link>
      </MoviesStyled>
    </React.Fragment>
  )
}

export default Movie