import React from "react";
import { Link } from "react-router-dom";
import FiltersStyled from "../FiltersStyle/FiltersStyled.style";

function TvMovies() {
  return(
    <FiltersStyled>
      <Link to={`/tv&movies`}>
        <h3>Tv & Movies</h3>
      </Link>
    </FiltersStyled>
  )
}

export default TvMovies