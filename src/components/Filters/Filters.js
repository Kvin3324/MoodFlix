import React from "react";
import Trending from "../LeftSection/Filters/Trending/Trending";
import TvMovies from "../LeftSection/Filters/TvMovies/TvMovies";
import Categories from "../LeftSection/Filters/Categories/Categories";
import Tv from "../LeftSection/Filters/Tv/Tv";

function Filters() {
  return(
    <React.Fragment>
      <Trending />
      <TvMovies />
      <Tv />
      <Categories />
    </React.Fragment>
  )
}

export default Filters