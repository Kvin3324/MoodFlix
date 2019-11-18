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
      h2 {
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        margin: 0;
        color: white;
      }
      :hover {
        cursor: pointer;
      }
  }
`

export default MoviesStyled