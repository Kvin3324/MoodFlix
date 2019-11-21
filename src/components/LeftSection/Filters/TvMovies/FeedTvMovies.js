import React from "react";
import TvTopRated from "./Tv/TvTopRated";
import PopularMovie from "./Movie/PopularMovie";

function TrendingMovies() {
  return(
    <React.Fragment>
      <TvTopRated />
      <PopularMovie />
    </React.Fragment>
  )
}

export default TrendingMovies