import React, { useState } from "react";
import SearchBarStyled from "./SearchBarStyled.style";
import { Link } from "react-router-dom";

function SearchBar() {
  const [data, setData] = useState({
    results: [],
    searchInput: ""
  })

  function searchResults(el) {
    const newState = { ...data }
    newState.searchInput = el.target.value;
    setData(newState);
  }

  return (
    <React.Fragment>
      <SearchBarStyled className="search--input">
        <input type="search" placeholder="Search" onChange={e => searchResults(e)} />
        <Link to={`/searchResults?${data.searchInput}`} >
          <i className="fas fa-search"></i>
        </Link>
      </SearchBarStyled>
    </React.Fragment>
  )

}

export default SearchBar