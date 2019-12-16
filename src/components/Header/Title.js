import React from "react";
import TitleStyled from "./TitleStyled.style";
import { NavLink } from "react-router-dom";

function Title() {
  return(
    <TitleStyled>
      <NavLink to="/">
        MoodFlix
      </NavLink>
    </TitleStyled>
  )
}

export default Title