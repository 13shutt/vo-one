import styled, { css } from "styled-components"

const TitleText = styled.span`
  color: ${props => props.theme.primaryColor};;
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
      color: ${props => props.theme.secondaryColor};
      font-weight: bold;
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