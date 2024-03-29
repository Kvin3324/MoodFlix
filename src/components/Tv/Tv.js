import React from "react";
import MoviesStyled from "../Feed/MoviesHome/MoviesStyled.style";
import { Link } from "react-router-dom";

function Tv(props) {
  return (
    <React.Fragment>
      <MoviesStyled className="movie mr-5">
        <Link to={`/aboutTv/${props.movie.id}`}>
          <div className="movie--body mr-5">
            <div className="movie--img">
              <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="poster" />
            </div>
            <div className="movie--title">
              {
                function () {
                  if (props.movie.media_type === "tv") {
                    return(
                      <h2>{props.movie.original_name} ({props.movie.media_type})</h2>
                    )
                    } else {
                    return <h2>{props.movie.original_name}</h2>
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

export default Tv