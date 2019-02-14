import styled, { css } from "styled-components"

const Paragraph = styled.p`
  span {
    background: ${props => props.theme.textHighLightBg};
    color: ${props => props.theme.textHighLightColor};
    padding: 2px 1px 0px 1px;
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