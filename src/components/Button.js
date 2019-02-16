import styled from 'styled-components'

const Button = styled.button`
  width: 635px;
  height: 100px;
  border: 3px solid ${props => props.theme.primaryColor};
  box-sizing: border-box;
  border-radius: 50px;
  font-family: HelveticaNeueCyrMedium;
  line-height: normal;
  font-size: 30px;
  color: ${props => props.theme.primaryColor};
  background: ${props => props.theme.backgroundColor};
  transition: ease-out 0.08s;
  margin: 28vh 0vh 4vh 0vh;

  &:hover {
    color: ${props => props.theme.backgroundColor};
    background: ${props => props.theme.primaryColor};
    cursor: pointer;
  }
`

export default Button