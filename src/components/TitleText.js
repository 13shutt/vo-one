import styled, { css } from "styled-components"

const TitleText = styled.span`
  color: ${props => props.theme.primaryColor};;
  font-family: "HelveticaNeueCyrMedium";

  ${({ header }) => 
    header && css`
      line-height: 75px;
      font-size: 95px;
      font-family: "HelveticaNeueCyrBold";
      position: relative;
      z-index: 3;
    `
  }

  ${({ medium }) => 
    medium && css`
      line-height: 75px;
      font-size: 72px;
      font-family: "HelveticaNeueCyrMedium";
    `
  }

  ${({ black }) => 
    black && css`
      line-height: 75px;
      font-size: 95px;
      color: ${props => props.theme.secondaryColor};
      margin-left: 3vw;
      font-family: "HelveticaNeueCyrBold";
      position: relative;
      z-index: 1;
      top: -21px;
      left: -13px;
    `
  }

  ${({ label }) => 
    label && css`
      line-height: 43px;
      font-size: 36px;
    `
  }

`

export default TitleText