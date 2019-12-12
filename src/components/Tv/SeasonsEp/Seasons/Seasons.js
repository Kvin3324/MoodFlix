import React from "react";

function Seasons(props) {
  console.log("coucou");
  
  return(
    <React.Fragment>
      <div className="season">
        <div className="season--poster">
          <img src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt="poster"></img>
        </div>
        <div className="season--title">
          <h2>{props.data.name}</h2>
        </div>
        <div className="season--air--date">
          <span>{props.data.air_date}</span>
        </div>
        <div className="season--overview">
          <p>{props.data.overview}</p>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Seasons