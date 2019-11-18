import React from 'react';
import { Route, HashRouter } from "react-router-dom";
// import logo from '../logo.svg';
import '../App.css'
import Title from '../components/Header/Title';
import Trending from '../components/LeftSection/Filters/Trending';
import TvMovies from '../components/LeftSection/Filters/TvMovies';
import Watchlist from '../components/LeftSection/Filters/Watchlist';
import Categories from '../components/LeftSection/Filters/Categories/Categories';
import Feed from '../container/Feed';
import AboutMovie from "../components/Movie/AboutMovie";

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
              <div className="filters">
                <Trending />
                <TvMovies />
                <Watchlist />
                <Categories />
              </div>
            </section>
            <section className="right-section col-lg-9">
              <Route exact path="/" component={Feed} />
              <Route exact path="/about/:id" component={AboutMovie} ></Route>
            </section>
          </div>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
