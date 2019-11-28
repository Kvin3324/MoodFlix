import React, { useState, useEffect } from "react";
import AboutMovieStyled from "./AboutMovieStyled.style";
import Loader from "../Loader/Loader";

function EventOverview(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US`)
      .then(response => response.json())
      .then(dataParsed => setData({ ...dataParsed }))
  }, []);

  function openNewLink() {
    window.open(`https://www.youtube.com/results?search_query=${data.title}`, '_blank');
  }

  function goBack() {
    window.history.back();
  }

  return (
    <React.Fragment>
      {
        function () {
          if (data.length === 0) return <Loader/>;

          if (data.length !== 0) {
            return (
              <React.Fragment>
                <AboutMovieStyled className="movie--about">
                  <div className="go--to--home">
                    {/* <a href="#/" alt="home"> */}
                    <i className="fas fa-home" onClick={goBack} ></i>
                    {/* </a> */}
                  </div>
                  <div className="movie--about--header">
                    <div className="movie--about--backdrop">
                      <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="backdrop"></img>
                    </div>
                    <div className="movie--about--meta">
                      <div className="movie--about--title">
                        <h1>{data.title}</h1>
                      </div>
                      <div className="movie--about--infos">
                        <div className="movie--about--infos--vote">
                          {
                            function () {
                              if (data.vote_average > 8) {
                                return (
                                  <>
                                    <p>rating:</p>
                                    <p>
                                      {[...Array(4)].map((e, i) => <i className="fas fa-star" key={i}></i>)}
                                      <i className="fas fa-star-half"></i>
                                    </p>
                                    <p>{data.vote_average} </p>
                                  </>
                                )
                              }
                              if (data.vote_average > 5 && data.vote_average < 8) {
                                return (
                                  <>
                                    <p>rating:</p>
                                    <p>
                                      {[...Array(3)].map((e, i) => <i className="fas fa-star" key={i}></i>)}
                                      {[...Array(2)].map((e, i) => <i className="far fa-star" key={i}></i>)}
                                    </p>
                                    <p>{data.vote_average} </p>
                                  </>
                                )
                              }
                              if (data.vote_average < 5) {
                                return (
                                  <>
                                    <p>rating:</p>
                                    <p>
                                      {[...Array(2)].map((e, i) => <i className="fas fa-star" key={i}></i>)}
                                      {[...Array(3)].map((e, i) => <i className="far fa-star" key={i}></i>)}
                                    </p>
                                    <p>{data.vote_average} </p>
                                  </>
                                )
                              }
                            }()
                          }
                        </div>

                        <div className="movie--about--infos--genres">
                          <p>genres:</p>
                          {
                            function () {
                              return data.genres.map((genre, index) => {
                                return (
                                  <p key={index}>{genre.name}</p>
                                )
                              })
                            }()
                          }
                        </div>
                        <div className="movie--about--infos--runtime">
                          <p>runtime: {data.runtime}min</p>
                        </div>
                        <div className="movie--about--infos--date">
                          {
                            function () {
                              return <p>release date: {new Date(data.release_date).getFullYear()} </p>
                            }()
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="movie--about--description">
                    <h2>SYNOPSIS</h2>
                    <p>{data.overview}</p>
                  </div>
                  <button className="btn btn-primary" onClick={openNewLink}>Watch BA</button>
                </AboutMovieStyled>
              </React.Fragment>
            )
          }
        }()
      }
    </React.Fragment>
  )
}

export default EventOverview