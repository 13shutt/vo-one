import styled from 'styled-components'

const Contact = styled.div`
  margin-top: 3vh;
  font-family: "HelveticaNeueCyrLight";
  line-height: normal;
  line-height: 19px;
  font-size: 16px;
  display: flex;
  flex-direction: row;

  div {
    font-family: "HelveticaNeueCyrLight";
    line-height: normal;
    line-height: 19px;
    font-size: 16px;
    margin-right: 5px;
  }

  span {
    font-family: "HelveticaNeueCyrBold";
    color: ${props => props.theme.primaryColor};
    margin: 0 3px;
  }
`

export default Contact