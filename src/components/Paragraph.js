import styled, { css } from "styled-components"

const Paragraph = styled.p`
  span {
    background: #9973C7;
    color: #FFFFFF;
  }
  ${({ intro }) => 
    intro && css`
      margin-top: 7vh;
      font-family: HelveticaNeueCyr;
      line-height: 19px;
      font-size: 16px;
      width: 49vw;
      margin-bottom: 7vh;
    `
  }
`

export default Paragraph