import React, { useState, useEffect } from "react";
import MoviesStyled from "./MoviesStyled.style";

function Movies() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/12/recommendations?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US&page=1`)
      .then(response => response.json())
      .then(dataParsed => setData([...dataParsed.results]))
  }, []);

  console.log(data);

  return (
    <React.Fragment>
      <MoviesStyled className="movies--feed col-lg-12">
        <h1>Recommended for you</h1>
        <div className="movies--feed--recommendations">
          {
            function () {
              if (data.length === 0) return null;

              if (data.length !== 0) {
                return data.map((movie, index) => {
                  return (

                    <div className="mr-5">

                      <div className="movie--img">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" />
                      </div>
                      <div className="movie--title">
                        <h2>{movie.title}</h2>
                      </div>
                    </div>




                  )
                })
              }
            }()
          }
        </div>

      </MoviesStyled>
    </React.Fragment>


  )
}

export default Movies