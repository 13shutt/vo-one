import styled from "styled-components"

const Header = styled.header`
  display: flex;
  flex-direction: row;
  h5 {
    margin-right: 5vw;
    line-height: normal;
    font-size: 24px;
    font-weight: bold;
  }
  h5 a {
    color: black;
    text-decoration: none;
    &:hover, &:active, &:visited {
      text-decoration: none;
    }
  }
`

export default Header