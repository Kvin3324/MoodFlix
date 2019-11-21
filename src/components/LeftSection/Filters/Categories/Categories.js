import React, {useState, useEffect} from "react";
import CategoriesStyled from "./CategoriesStyled.style";

function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`)
    .then(  response => response.json())
    .then(dataParsed => setData([...dataParsed.genres]))
  }, [])

  console.log(data);



  return(
    <CategoriesStyled className="categories">
      <h3>Categories</h3>
        <div className="categories--names">
          {
            function () {
              if (data.length === 0) return "loading";

              if (data.length !== 0) {
                return data.map((genre, index) => {
                  return <li key={index}>{genre.name}</li>
                })
              }
            }()
          }
        </div>
    </CategoriesStyled>
  )
}

export default Categories