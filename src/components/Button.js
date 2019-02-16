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
  color: ${props => props.theme.primaryColor};
  background: ${props => props.theme.backgroundColor};
  transition: ease-out 0.08s;

  &:hover {
    color: ${props => props.theme.backgroundColor};
    background: ${props => props.theme.primaryColor};
    cursor: pointer;
  }
`

export default Button