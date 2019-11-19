import React from "react";
import Trending from "../LeftSection/Filters/Trending/Trending";
import TvMovies from "../LeftSection/Filters/TvMovies/TvMovies";
import Watchlist from "../LeftSection/Filters/Watchlist/Watchlist";
import Categories from "../LeftSection/Filters/Categories/Categories";

function Filters() {
  return(
    <React.Fragment>
      <Trending />
      <TvMovies />
      <Watchlist />
      <Categories />
    </React.Fragment>
  )
}

export default Filters