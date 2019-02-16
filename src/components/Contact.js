import styled from 'styled-components'

const Contact = styled.div`
  margin-top: 3vh;
  font-family: "HelveticaNeueCyrLight";
  line-height: normal;
  display: flex;
  flex-direction: row;
  line-height: normal;
  font-size: 18px;

  div {
    font-family: "HelveticaNeueCyrLight";
    line-height: normal;
    font-size: 18px;
    margin-right: 5px;
  }

  span {
    font-family: "HelveticaNeueCyrBold";
    color: ${props => props.theme.primaryColor};
    margin: 0 3px;
  }
`

export default Contact