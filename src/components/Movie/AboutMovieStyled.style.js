import styled from "styled-components";

const AboutMovieStyled = styled.div`
  color: white;
  .movie--about--title {
    h1 {
      font-size: 6em;
    }
  }
  .movie--about--infos {
    display: inline-flex;
    p {
      display: inline-flex;
      margin-left: 20px;
    }
  }
  .movie--about--description {
    margin: 5% 0;
  }
`

export default AboutMovieStyled