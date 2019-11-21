import styled from "styled-components";

const AboutMovieStyled = styled.div`
  .go--back {
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
  .tv--about--header {
    margin-bottom: 4%;
    img {
      float: left;
    }
  }
  .tv--about--meta {
    margin-left: 50%;
    h1 {
      font-size: 3em;
    }
    p {
      display: inline-flex;
      padding: 0 5px;
    }
  }
  .tv--about--description {
    margin: 5% 0;
    font-size: 1.4em;
  }
  .tv--season {
    display: flex;
    justify-content: center;
    font-size: 2em;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    span {
      border-left: 1px solid white;
      height: 127px;
    }
    div {
      margin: 0 10%;
      p {
        text-align: center;
      }
    }
  }
  button, button:hover {
    background-color: #21232A;
    border: none;
  }

  .about--episodes--next--img, .about--episodes--last--img {
    img {
      height: 167px;
      object-fit: contain;
    }
  }
`

export default AboutMovieStyled