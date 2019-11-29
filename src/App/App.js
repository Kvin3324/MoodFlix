import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import '../App.css'
import Title from '../components/Header/Title';
import Feed from '../container/Feed';
import AboutMovie from "../components/Movie/AboutMovie";
import AboutTv from "../components/Tv/AboutTv";
import TrendingMovies from "../components/LeftSection/Filters/Trending/TrendingMovies";
import TvMovies from "../components/LeftSection/Filters/TvMovies/FeedTvMovies";
import Filters from '../components/Filters/Filters';
import Results from '../container/Results';
import SearchBar from '../container/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';

function App() {
  return (
    <HashRouter>
      <div className="container App col-lg-12">
        {/* <header className="App-header">
          <Title />
        </header> */}
        <main>
          <div className="row">
            <section className="left-section col-lg-2">
              <Title />
              <SearchBar />
              <div className="filters">
                <Filters />
              </div>
            </section>
            <section className="right-section col-lg-9">
              <Route exact path="/" component={Feed} />
              <Route exact path="/aboutMovie/:id" component={AboutMovie} ></Route>
              <Route exact path="/aboutTv/:id" component={AboutTv} ></Route>
              <Route exact path="/trending" component={TrendingMovies} ></Route>
              <Route exact path="/tv&movies" component={TvMovies} ></Route>
              <Route exact path="/byCategory/:id" component={Results} ></Route>
              <Route exact path="/searchResults" component={SearchResults} ></Route>
            </section>
          </div>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
