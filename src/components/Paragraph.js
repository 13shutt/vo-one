import styled, { css } from "styled-components"

const Paragraph = styled.p`
  font-family: "HelveticaNeueCyrLight";
  line-height: 19px;
  font-size: 18px;

  ${({ about }) =>
    about && css`
      line-height: normal;
      font-size: 24px;
    `
  }
  ${({ high }) =>
    high && css`
      line-height: 25px;
      font-size: 18px;
    `
  }
`

export default Paragraph