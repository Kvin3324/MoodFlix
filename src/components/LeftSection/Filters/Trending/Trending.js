import React from "react";
import { Link } from "react-router-dom";

function Trending() {
  return(
    <Link to={`/trending`}>
      <h3>Trending</h3>
    </Link>
  )
}

export default Trending