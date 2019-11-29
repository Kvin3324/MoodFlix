import React, { useState, useEffect } from "react";
import Slider from "../../Slider/Slider";
import Movie from "../../Movie/Movie";
import Loader from "../../Loader/Loader";

function MoviesTopRated() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US&page=1`)
      .then(response => response.json())
      .then(dataParsed => setData([...dataParsed.results]))
  }, []);

  return(
      <React.Fragment>
        <div className="movies--feed col-lg-12">
          <h1>Top Rated</h1>
          <div className="movies--feed--top--rated">
          <Slider>
            {
              function () {
                if (data.length === 0) return <Loader/>;

                if (data.length !== 0) {
                  return data.map((movie, index) => {
                    return(
                      <Movie movie={movie} key={index} />
                    )
                  })
                }
              }()
            }
          </Slider>
          </div>
        </div>
      </React.Fragment>
  )
}

export default MoviesTopRated