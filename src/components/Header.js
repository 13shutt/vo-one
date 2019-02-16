import styled from "styled-components"

const Header = styled.header`
  display: flex;
  flex-direction: row;
  margin-bottom: 17vh;
  h5 {
    margin-right: 5vw;
    line-height: normal;
    font-size: 24px;
  }
  h5 a {
    color: black;
    font-family: "HelveticaNeueCyrBold";
    text-decoration: none;
    color: #7C8185;;
    &:hover, &:active, &:visited {
      text-decoration: none;
    }
    &:hover {
      transition: ease-out 0.08s;
      color: #000;
    }
  }
`

export default Header