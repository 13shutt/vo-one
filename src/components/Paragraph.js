import styled, { css } from "styled-components"

const Paragraph = styled.p`
  font-family: "HelveticaNeueCyrLight";
  line-height: normal;
  line-height: 19px;
  font-size: 16px;

  ${({ about }) =>
    about && css`
      font-size: 22px;
    `
  }
`

export default Paragraph