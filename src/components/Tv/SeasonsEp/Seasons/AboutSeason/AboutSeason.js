import React, { useState, useEffect } from "react";
import AboutSeasonStyled from "./AboutSeasonStyled.style";
import Loader from "../../../../Loader/Loader";
import ReactPlayer from "react-player";
import SeasonsStyled from "../SeasonsStyled.style";

function AboutSeason(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${props.match.params.id}/season/${props.match.params.season_number}?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US&append_to_response=credits,videos`)
      .then(response => response.json())
      .then(dataParsed => setData({ ...dataParsed }))
  }, [props.match.params.id])

  console.log(data);

  // function noLoop(iterator = 0, entier) {
  //   if (iterator < entier) {
  //     console.log(iterator);
  //     iterator += 1;
  //     return noLoop(iterator, entier);
  //   }
  // }

  // noLoop(0, 5);

  return (
    <React.Fragment>

      {
        function () {
          if (data.length === 0) return <Loader />

          if (data.length !== 0) {
            return (
              <AboutSeasonStyled>
                <div className="season--title">
                  <h1>{data.name}</h1>
                </div>
                <div className="season--about col-lg-12">
                  <div className="row">
                  <div className="season--poster col-lg-3">
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="poster"></img>
                  </div>
                  <div className="season--overview col-lg-4">
                    <h3>Synopsis</h3>
                    <p> {data.overview}  </p>
                  </div>
                  <div className="season--infos col-lg-5">
                    <h3>Infos Season</h3>
                    <p>{data.episodes.length} episodes  </p>
                    <p>Season released in {data.air_date}  </p>
                  </div>
                  </div>
                </div>
                <div className="season--casting mt-5">
                  <div className="season--casting--title">
                    <h1 className="mb-4">Casting</h1>
                  </div>
                  <div className="season--cast">
                    <div className="row">
                      {
                        data.credits.cast.map((people, index) => {
                          return(
                            <div className="about--people col-lg-3" key={index}>
                              <div className="about--people--img">
                                <img src={`https://image.tmdb.org/t/p/w500/${people.profile_path}`} alt="poster"></img>
                              </div>
                              <div className="about--people--name">
                                <p> {people.name} </p>
                              </div>
                              <div className="about--people--character">
                                <p><em>Character: {people.character}</em></p>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className="season--videos mt-5">
                  <div className="season--videos--title">
                    <h1>Video(s) of the Season {data.season_number}</h1>
                  </div>
                  <div className="season--videos">
                      {
                        function () {
                          if (data.videos.results) {
                            return data.videos.results.map((video, index) => {
                              return(
                                <ReactPlayer
                                  url={`https://www.youtube.com/watch?v=${video.key}`}
                                  width={"60%"}
                                  controls
                                  key={index}
                                />
                              )
                            })
                          }
                        }()
                      }
                  </div>
                </div>
                <div className="season--list--episode">
                      <SeasonsStyled>
                        
                      </SeasonsStyled>
                </div>
              </AboutSeasonStyled>
            )
          }
        }()
      }
    </React.Fragment>
  )
}

export default AboutSeason