import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoriesStyled from "./CategoriesStyled.style";

function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`)
      .then(response => response.json())
      .then(dataParsed => setData([...dataParsed.genres]))
  }, [])

  return (
    <CategoriesStyled className="categories">
      <h3>Categories</h3>
      <div className="categories--names">
        {
          function () {
            if (data.length === 0) return "loading";

            if (data.length !== 0) {
              return data.map((genre, index) => {
                return (
                  <Link to={`/byCategory/${genre.id}`} key={genre.id}>
                    <li key={genre.id} className={genre.id}>{genre.name}</li>
                  </Link>
                )
              })
            }
          }()
        }
      </div>
    </CategoriesStyled>
  )
}

export default Categories