import styled from "styled-components";

const NavbarStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  div {
    display: inline-flex;
    margin-top: 10px;
    a:hover {
      text-decoration: none;
    }
    li {
      list-style-type: none;
      text-decoration: none;
      color: white;
      padding-left: 20px;
    }
  }
`

export default NavbarStyled