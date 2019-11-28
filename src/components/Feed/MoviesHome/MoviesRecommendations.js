import React, { useState, useEffect } from "react";
import Slider from "../../Slider/Slider";
import Movie from "../../Movie/Movie";
import Loader from "../../Loader/Loader";

function Movies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/12/recommendations?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US&page=1`)
      .then(response => response.json())
      .then(dataParsed => setData([...dataParsed.results]))
  }, []);

  return (
    <React.Fragment>
      <div className="movies--feed mt-5 col-lg-12">
        <h1>Recommended for you</h1>
        <div className="movies--feed--recommendations">
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

export default Movies