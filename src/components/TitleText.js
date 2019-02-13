import styled, { css } from "styled-components"

const TitleText = styled.span`
  color: #440099;
  font-family: HelveticaNeueCyr;

  ${({ header }) => 
    header && css`
      line-height: 75px;
      font-size: 95px;
      font-weight: 900;
    `
  }

  ${({ black }) => 
    black && css`
      line-height: 75px;
      font-size: 95px;
      color: #000;
      font-weight: 900;
      margin-left: 3vw;
    `
  }

  ${({ label }) => 
    label && css`
      line-height: 43px;
      font-size: 36px;
      font-weight: bold;
    `
  }

`

export default TitleText