import React, { useState, useEffect } from "react";
import Movie from "../components/Movie/Movie";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

function Results() {
  const [data, setData] = useState({
    results: [],
    currentPage: 1,
    totalResults: 0,
    totalPages: 0
  });

  function getResults(page) {
    // fetch("https://api.themoviedb.org/3/movie/popular?api_key=3466f7f79dd6bdfaf4b0e8b5480c2432&append_to_response=recommendations,top_rated&page=2")
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3466f7f79dd6bdfaf4b0e8b5480c2432&with_genres=16|28&page=${page}`)
      .then(response => response.json())
      .then(dataParsed => setData({
        results: dataParsed.results,
        currentPage: dataParsed.page,
        totalResults: dataParsed.total_results,
        totalPages: dataParsed.total_pages,
      })
      )
  }

  useEffect(() => {
    getResults(data.currentPage);
  }, [])

  function handleOnChangePage(page) {
    getResults(page);
  }

  return (
    <React.Fragment>
      <h1>Results</h1>
      <Pagination
        onChange={handleOnChangePage}
        current={data.currentPage}
        total={data.totalResults}
        pageSize={data.totalPages}
      />
      {
        function () {
          if (data.results.length === 0) return "loading";

          if (data.results.length !== 0) {
            return data.results.map((result, index) => {
              return <Movie movie={result} key={index} />
            })
          }
        }()
      }
    </React.Fragment>
  )

}

export default Results