import React from "react";
import MoviesStyled from "./MoviesStyled.style";

function Movies() {

  return(
    <MoviesStyled className="movies--feed">
      <div class="card">
        <div className="card-body">
          <div className="card--img">
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
          </div>
          <div class="card-product-infos">
            <h2>Product name</h2>
          </div>
        </div>
      </div>

      <div class="card">
        <div className="card-body">
          <div className="card--img">
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
          </div>
          <div class="card-product-infos">
            <h2>Product name</h2>
          </div>
        </div>
      </div>
      <div class="card">
        <div className="card-body">
          <div className="card--img">
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
          </div>
          <div class="card-product-infos">
            <h2>Product name</h2>
          </div>
        </div>
      </div>
    </MoviesStyled>
  )
}

export default Movies