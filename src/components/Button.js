import styled from 'styled-components'

const Button = styled.button`
  width: 26vw;
  height: 10vh;
  border: 3px solid ${props => props.theme.primaryColor};
  box-sizing: border-box;
  border-radius: 50px;
  font-family: HelveticaNeueCyrMedium;
  line-height: normal;
  font-size: 24px;
  color: ${props => props.theme.primaryColor};;
  background: ${props => props.theme.backgroundColor};
`

export default Button