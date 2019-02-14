import styled, { css } from "styled-components"

const Paragraph = styled.p`
  font-family: "HelveticaNeueCyrLight";
  span {
    background: ${props => props.theme.textHighLightBg};
    color: ${props => props.theme.textHighLightColor};
    padding: 2px 1px 0px 1px;
    font-family: "HelveticaNeueCyrLight";
  }
  ${({ intro }) => 
    intro && css`
      margin-top: 7vh;
      font-family: "HelveticaNeueCyrLight";
      line-height: normal;
      line-height: 19px;
      font-size: 16px;
      width: 49vw;
      margin-bottom: 7vh;
    `
  }
`

export default Paragraph