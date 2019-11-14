import React from "react";
import MoviesStyled from "./MoviesStyled.style";

function MoviesTopRated() {
  return(
    <MoviesStyled className="movies--feed col-lg-12">

    <div className="movies--feed--top--rated">
        <h1>Top Rated</h1>
        <div className="row">
          <div className="card">
            <div className="card-body">
              <div className="card--img">
                <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
              </div>
              <div className="card-product-infos">
                <h2>Product name</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card--img">
                <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
              </div>
              <div className="card-product-infos">
                <h2>Product name</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card--img">
                <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
              </div>
              <div className="card-product-infos">
                <h2>Product name</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      </MoviesStyled>

  )
}

export default MoviesTopRated