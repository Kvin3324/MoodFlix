import React from "react";
import MoviesStyled from "../Feed/MoviesHome/MoviesStyled.style";

function Movie(props) {
  return (
    <MoviesStyled className="movie mr-5">
    <div className="movie--body mr-5">
      <div className="movie--img">
        <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="poster" />
      </div>
      <div className="movie--title">
        <h2>{props.movie.title}</h2>
      </div>
      </div>
    </MoviesStyled>
  )
}

export default Movie