import React from "react";
import { Link } from "react-router-dom";
import FiltersStyled from "../FiltersStyle/FiltersStyled.style";

function Trending() {
  return(
    <FiltersStyled>
      <Link to={`/trending`}>
        <h3>Trending</h3>
      </Link>
    </FiltersStyled>
  )
}

export default Trending