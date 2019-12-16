import React, { useState, useEffect } from "react";
import Pagination from "rc-pagination";
import Loader from "../../../Loader/Loader";
import { Link } from "react-router-dom";
import MoviesStyled from "../../../Feed/MoviesHome/MoviesStyled.style";

function TvList() {
  const [data, setData] = useState({
    TvResults: [],
    currentPage: 1,
    totalResults: 0,
    totalPages: 0
  });

  function getTvResults(page) {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false`)
      .then(response => response.json())
      .then(dataParsed => setData({
        TvResults: dataParsed.results,
        currentPage: dataParsed.page,
        totalResults: dataParsed.total_results,
        totalPages: dataParsed.total_pages,
      })
      )
  }

  useEffect(() => {
    getTvResults(data.currentPage)
  }, []);

  function handleOnChangePage(page) {
    getTvResults(page);
  }

  return (
    <React.Fragment>
      <h1>Tv Results:</h1>
      <Pagination
        onChange={handleOnChangePage}
        current={data.currentPage}
        total={data.totalResults}
        pageSize={data.totalPages}
        className="mb-5 mt-3"
      />
      {
        function () {
          if (data.TvResults.length === 0) return <Loader />

          if (data.TvResults.length !== 0) {
            return data.TvResults.map((tv, index) => {
              return (
                  <MoviesStyled className="mr-5" key={index}>
                    <div className="movie--body mr-5" key={index}>
                      <Link to={`/aboutTv/${tv.id}`}>
                        <div className="movie--img">
                          <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt="poster" />
                        </div>
                        <div className="movie--title">
                          <h2>{tv.name}</h2>
                        </div>
                      </Link>
                    </div>
                  </MoviesStyled>
              )
            })
          }
        }()
      }
    </React.Fragment>
  )
}

export default TvList