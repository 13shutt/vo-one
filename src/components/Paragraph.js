import styled, { css } from "styled-components"

const Paragraph = styled.p`
  font-family: "HelveticaNeueCyrLight";
  line-height: normal;
  line-height: 19px;
  font-size: 16px;

  span {
    background: ${props => props.theme.textHighLightBg};
    color: ${props => props.theme.textHighLightColor};
    padding: 2px 1px 0px 1px;
    font-family: "HelveticaNeueCyrLight";
  }

  ${({ about }) =>
    about && css`
      font-size: 22px;
    `
  }
`

export default Paragraph