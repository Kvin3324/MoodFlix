import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import '../App.css'
import Title from '../components/Header/Title';
import Feed from '../container/Feed';
import AboutMovie from "../components/Movie/AboutMovie";
import TrendingMovies from "../components/LeftSection/Filters/Trending/TrendingMovies";
import Filters from '../components/Filters/Filters';

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
                <Filters />
              </div>
            </section>
            <section className="right-section col-lg-9">
              <Route exact path="/" component={Feed} />

              <Route exact path="/about/:id" component={AboutMovie} ></Route>
              <Route exact path="/trending" component={TrendingMovies} ></Route>
            </section>
          </div>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
