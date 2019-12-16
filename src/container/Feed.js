import React from "react";
import MoviesRecommendations from "../components/Feed/MoviesHome/MoviesRecommendations";
import MoviesTopRated from "../components/Feed/MoviesHome/MoviesTopRated";

function Feed() {
  return(
    <React.Fragment>
      <MoviesRecommendations />
      <MoviesTopRated />
    </React.Fragment>
  )
}

export default Feed