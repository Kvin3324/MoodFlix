import React from "react";
import MoviesRecommendations from "../components/Feed/MoviesHome/MoviesRecommendations";
import MoviesTopRated from "../components/Feed/MoviesHome/MoviesTopRated";

function Feed() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/movie/12/recommendations?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US&page=1`)
  //   .then(response => response.json())
  //   .then(dataParsed => setData([...dataParsed.results]))
  // }, []);

  // console.log(data);

  return(
    <React.Fragment>
      <MoviesRecommendations />
      <MoviesTopRated />
    </React.Fragment>
  )
}

export default Feed