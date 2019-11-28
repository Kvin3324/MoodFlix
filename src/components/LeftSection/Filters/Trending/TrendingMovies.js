import React, { useState, useEffect } from "react";
import Movie from "../../../Movie/Movie";
import Tv from "../../../Tv/Tv";
import Loader from "../../../Loader/Loader";

function TrendingMovies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`)
      .then(response => response.json())
      .then(dataParsed => setData([...dataParsed.results]))
  }, []);

  return (
    <React.Fragment>
      <h1 className=" mt-3 mb-5">Trending Movies & Tv (by week):</h1>
      {
        function () {
          if (data.length === 0) return <Loader/>;

          if (data.length !== 0) {
            return data.map((movie, index) => {
              if (movie.media_type === "movie") {
                return <Movie movie={movie} key={index} />
              } else if (movie.media_type === "tv") {
                return <Tv movie={movie} key={index} />
              }
            })
          }
        }()
      }
    </React.Fragment>
  )
}

export default TrendingMovies