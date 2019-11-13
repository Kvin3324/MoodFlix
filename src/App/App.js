import React from 'react';
// import logo from '../logo.svg';
import '../App.css'
import Title from '../components/Header/Title';
import Movies from '../components/Feed/MoviesHome/Movies';
import Trending from '../components/LeftSection/Filters/Trending';
import TvMovies from '../components/LeftSection/Filters/TvMovies';
import Watchlist from '../components/LeftSection/Filters/Watchlist';
import Categories from '../components/LeftSection/Filters/Categories/Categories';

function App() {
  return (
    <div className="App">
      <div className="container col-lg-12">
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
            <section className="right-section col-lg-8">
                <Movies />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
