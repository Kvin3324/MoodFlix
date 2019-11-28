import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MoviesStyled from "../../../../Feed/MoviesHome/MoviesStyled.style"
import Slider from "../../../../Slider/Slider";
import Loader from "../../../../Loader/Loader";

function TrendingMovies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`)
      .then(response => response.json())
      .then(dataParsed => setData([...dataParsed.results]))
  }, []);

  return (
    <React.Fragment>
      {
        function () {
          if (data.length === 0) return <Loader/>;

          if (data.length !== 0) {
            return (
              <React.Fragment>
                <h1>Popular Movies</h1>
                <MoviesStyled className="movie mr-5">
                  <Slider>
                    {
                      function () {
                        return data.map((movie, index) => {
                          return (
                            <div className="movie--body mr-5" key={index}>
                              <Link to={`/aboutMovie/${movie.id}`}>
                                <div className="movie--img">
                                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" />
                                </div>
                                <div className="movie--title">
                                  <h2>{movie.title}</h2>
                                </div>
                              </Link>
                            </div>
                          )
                        })
                      }()
                    }
                  </Slider>
                </MoviesStyled>
              </React.Fragment>
            )
          }
        }()
      }
    </React.Fragment>
  )
}

export default TrendingMovies