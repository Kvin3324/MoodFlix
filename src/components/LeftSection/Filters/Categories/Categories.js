import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import CategoriesStyled from "./CategoriesStyled.style";

function Categories() {
  // const [data, setData] = useState([]);
  const [data, setData] = useState({
    data: [],
    genreId: 28
  });

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`)
    .then(  response => response.json())
    // .then(dataParsed => setData([...dataParsed.genres]))
    .then(dataParsed => setData({
      data: dataParsed.genres
    }))
  }, [])

  console.log(data.data);
  

  function handleChangeGenre(el) {
    // console.log(el.target.className);
    // if (el.target.className === data.genreId) return null;

    // const newState = {...data}
    // newState.genreId = el.target.className;

    // setData(newState);

    console.log(window.location.href);
    window.location.href = `${window.location.origin}/#/byCategory/${el.target.className}`;
    window.location.reload();
  }

  

  return(
    <CategoriesStyled className="categories">
      <h3>Categories</h3>
        <div className="categories--names">
          {
            function () {
              // if (data.length === 0) return "loading";
              if (data.data.length === 0) return "loading";

              // if (data.length !== 0) {
              if (data.data.length !== 0) {
                // return data.map((genre, index) => {
                return data.data.map((genre, index) => {
                  return (
                    // <Link to={`/byCategory/${genre.id}`} key={genre.id}>
                    <Link to={`/byCategory/${genre.id}`} key={genre.id} onClick={handleChangeGenre}>
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