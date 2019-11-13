import React from "react";
import CategoriesStyled from "./CategoriesStyled.style";

function Categories() {
  return(
    <CategoriesStyled className="categories">
      <h3>Categories</h3>
        <div className="categories--names">
            <li>Action</li>
            <li>Comedy</li>
            <li>Drama</li>
            <li>Thriller</li>
            <li>Adventure</li>
            <li>Science fiction</li>
            <li>Kebab</li>
            <li>Mcdo</li>
            <li>BK</li>
        </div>
    </CategoriesStyled>
  )
}

export default Categories