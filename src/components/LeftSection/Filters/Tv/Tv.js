import React from "react";
import { Link } from "react-router-dom";
import FiltersStyled from "../FiltersStyle/FiltersStyled.style";

function Tv() {
  return(
    <FiltersStyled>
      <Link to={`/tvList`}>
      <h3>Tv</h3>
      </Link>
    </FiltersStyled>
  )
}

export default Tv