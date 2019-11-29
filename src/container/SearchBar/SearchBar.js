import React, { useState, useEffect } from "react";
import SearchBarStyled from "./SearchBarStyled.style";

function SearchBar() {
  const [data, setData] = useState({
    results: [],
    searchInput: ""
  })

  function searchResults(el) {
    const newState = {...data}
    console.log(`${el.target.value}`);
    newState.searchInput = el.target.value;
    setData(newState);
  }
  console.log(data.searchInput);

  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US&query=?&page=1&include_adult=false`)
  //   .then(response => response.json())
  //   .then(dataParsed => setData([...dataParsed.results]))
  // })

  console.log(data);

  return(
    <React.Fragment>
      <SearchBarStyled className="search--input">
        <input type="search" placeholder="Search" onChange={ e =>searchResults(e)} />
        <i className="fas fa-search"></i>
      </SearchBarStyled>
    </React.Fragment>
  )

}

export default SearchBar