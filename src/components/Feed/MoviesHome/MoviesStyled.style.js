import styled from "styled-components";

const MoviesStyled = styled.div`
  {
    display: inline-flex;
    margin-bottom: 10%;
      img {
        height: 100%;
        width: 10vw;
        object-fit: cover;
      }
      a {
        text-decoration: none;
      }
      h2 {
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        margin: 0;
        color: white;
        margin-top: 10px;
      }
      :hover {
        cursor: pointer;
      }
  }
`

export default MoviesStyled