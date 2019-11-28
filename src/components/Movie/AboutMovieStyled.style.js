import styled from "styled-components";

const AboutMovieStyled = styled.div`
  .go--to--home {
    position: absolute;
    top: 3%;
   i {
     font-size: 1.5em;
     cursor: pointer;
   }
  }
  color: white;
  margin-top: 14%;
  margin-left: 4%;
  .movie--about--header {
    margin-bottom: 2%;
    img {
      float: left;
    }
  }
  .movie--about--meta {
    margin-left: 50%;
    h1 {
      font-size: 3em;
    }
    p {
      display: inline-flex;
      padding: 0 5px;
    }
  }
  .movie--about--description {
    margin: 5% 0;
    font-size: 1.4em;
  }
  button, button:hover {
    background-color: #21232A;
    border: none;
      a {
        text-decoration: none;
        color: white;
      }
  }
`

export default AboutMovieStyled