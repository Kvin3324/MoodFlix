import styled from "styled-components";

const MoviesStyled = styled.div`
  {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grip-gap: 16px;

    .card {
      height: 20vh;
      background: white;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
      padding: 16px;

      img {
        height: 100%;
        width: 120px;
        object-fit: cover;
      }
      h2 {
        font-size: 16px;
        font-weight: bold;
        margin: 0;
      }
    }
  }
`

export default MoviesStyled