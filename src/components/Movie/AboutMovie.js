// import React from "react";
import React, { useState, useEffect, useRef } from "react";

import AboutMovieStyled from "./AboutMovieStyled.style";

function EventOverview(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US`)
      .then(response => response.json())
      .then(dataParsed => setData({ ...dataParsed }))
  }, []);

  console.log(data);

  return (
    <div>
      {
        function () {
          if (data.length === 0) return "loading";

          if (data.length !== 0) {
            return (
              <AboutMovieStyled className="movie--about">
                <div className="movie--about--title">
                  <h1>{data.title}</h1>
                </div>
                {/* <div className="separator"></div> */}
                <div className="movie--about--infos">
                  <p>popularity: {data.vote_average}</p>

                  <div className="movie--about--infos--genres">
                    {
                      function () {
                        return data.genres.map((genre, index) => {
                          return (
                            <p key={index}> {genre.name} </p>
                          )
                        })
                      }()
                    }
                  </div>
                  <p>{data.runtime}min</p>
                  <p> {data.release_date} </p>
                </div>
                <div className="movie--about--description">
                  {/* <span className="is__arrow__close" onClick={e => props.closeOverview(e)} >&times;</span> */}
                  <p>{data.overview}</p>
                  {/* <div className="separator"></div> */}
                </div>
                <button className="btn btn-primary">Watch BA</button>
              </AboutMovieStyled>
            )
          }
        }()
      }
    </div>
  )
}

export default EventOverview