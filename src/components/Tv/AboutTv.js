import React, { useState, useEffect } from "react";
import AboutTvStyled from "./AboutTvStyled.style";
import Loader from "../Loader/Loader";

function AboutTv(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${props.match.params.id}?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US`)
      .then(response => response.json())
      .then(dataParsed => setData({ ...dataParsed }))
  }, []);

  function goBack() {
    props.history.goBack(-1);
  }

  function voteAverage() {
    if (data.vote_average > 8) {
      return (
        <>
          <p>Rating:</p>
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
          <p>Rating:</p>
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
          <p>Rating:</p>
          <p>
            {[...Array(2)].map((e, i) => <i className="fas fa-star" key={i}></i>)}
            {[...Array(3)].map((e, i) => <i className="far fa-star" key={i}></i>)}
          </p>
          <p>{data.vote_average} </p>
        </>
      )
    }
  }

  function tvGenres() {
    return data.genres.map((genre, index) => {
      return (
        <p key={index}>{genre.name}</p>
      )
    })
  }

  function releaseYear() {
    return <p>Release date: {new Date(data.first_air_date).getFullYear()} </p>
  }

  function lastEpImg() {
    if (data.last_episode_to_air.still_path === null) {
      return <img src="https://citainsp.org/wp-content/uploads/2016/01/default.jpg" alt="no__poster"></img>
    } else {
      return <img src={`https://image.tmdb.org/t/p/w300/${data.last_episode_to_air.still_path}`} alt="last__eps__poster"></img>
    }
  }

  function nextEp() {
    if (data.next_episode_to_air) {
      return(
        <div className="about--episodes--next">
          <h3>Next episode:</h3>
          <div className="about--episodes--next--img mb-4">
            {
              function () {
                  if (data.next_episode_to_air.still_path === null) {
                    return <img src="https://citainsp.org/wp-content/uploads/2016/01/default.jpg" alt="no__poster"></img>
                  } else {
                    return <img src={`https://image.tmdb.org/t/p/w300/${data.next_episode_to_air.still_path}`} alt="next__eps__poster"></img>
                  }
              }()
            }
          </div>
          <div className="about--episodes--next--title">
            <h4> {data.next_episode_to_air.name} </h4>
          </div>
          <div className="about--episodes--next--number">
            <p>episode number: {data.next_episode_to_air.episode_number} </p>
          </div>
          <div className="about--episodes--next--episode">
            <p>release number: {data.next_episode_to_air.air_date} </p>
          </div>
        </div>
      )
    }
  }

  return (
    <React.Fragment>
      {
        function () {
          if (data.length === 0) return <Loader/>;

          if (data.length !== 0) {
            return (
              <React.Fragment>
                <AboutTvStyled className="tv--about">
                  <div className="go--back">
                    <i className="fas fa-home" onClick={goBack}></i>
                  </div>
                  <div className="tv--about--header">
                    <div className="tv--about--backdrop">
                      <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="backdrop"></img>
                    </div>
                    <div className="tv--about--meta">
                      <div className="tv--about--title">
                        <h1>{data.original_name}</h1>
                      </div>
                      <div className="tv--about--infos">
                        <div className="tv--about--infos--vote">
                          {voteAverage()}
                        </div>

                        <div className="tv--about--infos--genres">
                          <p>Genres:</p>
                          {tvGenres()}
                        </div>
                        <div className="tv--about--infos--runtime">
                          <p>Episode run time: {data.episode_run_time[0]}min</p>
                        </div>
                        <div className="tv--about--infos--date">
                          {releaseYear()}
                        </div>
                        <button className="btn btn-primary">
                          <a href={`https://www.youtube.com/results?search_query=${data.original_name}`} rel="noopener noreferrer" target="_blank" >
                            Watch BA
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="tv--about--description">
                    <h2>SYNOPSIS</h2>
                    <p>{data.overview}</p>
                  </div>
                  <div className="tv--season mb-5">
                    <div className="tv--season--number">
                      <p> {data.number_of_seasons} </p>
                      <p>seasons</p>
                    </div>
                    <span className="separator"></span>
                    <div className="tv--season--number">
                      <p> {data.number_of_episodes}</p>
                      <p>episodes</p>
                    </div>
                  </div>
                  <div className="episodes col-lg-12 mt-5">
                    <div className="row">
                      <div className="about--episodes col-lg-6">
                        <div className="about--episodes--last">
                          <h3>Last episode:</h3>
                          <div className="about--episodes--last--img mb-4">
                            {lastEpImg()}
                          </div>
                          <div className="about--episodes--last--title">
                            <h4> {data.last_episode_to_air.name} </h4>
                          </div>
                          <div className="about--episodes--last--number">
                            <p>episode number: {data.last_episode_to_air.episode_number} </p>
                          </div>
                          <div className="about--episodes--last--episode">
                            <p>release number: {data.last_episode_to_air.air_date} </p>
                          </div>
                        </div>
                      </div>

                      <div className="about--episodes col-lg-6">
                        {nextEp()}
                      </div>
                    </div>
                  </div>
                </AboutTvStyled>
              </React.Fragment>
            )
          }
        }()
      }
    </React.Fragment>
  )
}

export default AboutTv