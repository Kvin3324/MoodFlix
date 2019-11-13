import React from 'react';
// import logo from '../logo.svg';
import '../App.css'
import Title from '../components/Header/Title';
import Movies from '../components/Feed/MoviesHome/Movies';

function App() {
  return (
    <div className="App">
      <div className="container col-lg-12">
        <header className="App-header">
          <Title />
        </header>
        <div className="right-section col-lg-4">

        </div>
        <div className="left-section col-lg-8">
          <Movies />
        </div>
      </div>
    </div>
  );
}

export default App;
