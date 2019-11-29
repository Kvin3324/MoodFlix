import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Movie from "../Movie/Movie";
import Pagination from "rc-pagination";

function SearchResults(props) {
  const [data, setData] = useState({
    searchResults: [],
    currentPage: 1,
    totalResults: 0,
    totalPages: 0
  });

  function getSearchResults(page) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US&query=${props.location.search}&page=${page}&include_adult=false`)
      .then(response => response.json())
      .then(dataParsed => setData({
        searchResults: dataParsed.results,
        currentPage: dataParsed.page,
        totalResults: dataParsed.total_results,
        totalPages: dataParsed.total_pages,
      })
      )
  }

  useEffect(() => {
    getSearchResults(data.currentPage)
  }, [props.location.search]);

  function handleOnChangePage(page) {
    getSearchResults(page);
  }

  return (
    <React.Fragment>
      <h1>Search Results:</h1>
      <Pagination
        onChange={handleOnChangePage}
        current={data.currentPage}
        total={data.totalResults}
        pageSize={data.totalPages}
        className="mb-5 mt-3"
      />
      {
        function () {
          if (data.searchResults.length === 0) return <Loader />

          if (data.searchResults.length !== 0) {
            return data.searchResults.map((resultMovie, index) => {
              return <Movie movie={resultMovie} key={index} />
            })
          }
        }()
      }

    </React.Fragment>
  )
}

export default SearchResults