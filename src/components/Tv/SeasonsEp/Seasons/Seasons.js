import React from "react";
import SeasonsStyled from "./SeasonsStyled.style";

function Seasons(props) {

  function convertDate() {
    const date = new Date(props.data.air_date);
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <React.Fragment>
      <SeasonsStyled>
        <div className="season mt-3 mb-3">
          <div className="season--poster">
            <img src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt="poster"></img>
          </div>
          <div className=" ml-3">
            <div className="season--title">
              <h2>{props.data.name}</h2>
            </div>
            <div className="season--air--date">
              <p>{convertDate()}</p>
            </div>
            <div className="season--overview">
              <p>{props.data.overview}</p>
            </div>
          </div>
        </div>
      </SeasonsStyled>
    </React.Fragment>
  )
}

export default Seasons