import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import { initStyles } from 'styles'
import Routers from 'view/Routers'

initStyles()

const original = {
  primaryColor: "#440099", // ${props => props.theme.primaryColor};
  secondaryColor: "#000000", // ${props => props.theme.secondaryColor};
  backgroundColor: "#FFFFFF", // ${props => props.theme.backgroundColor};
  textHighLightColor: "#FFFFFF", // ${props => props.theme.textHighLightColor};
  textHighLightBg: "#9973C7" // ${props => props.theme.textHighLightBg};
}

const Body = styled.body`
  background: ${props => props.theme.backgroundColor};
`

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={original}>
        <Body>
          <Routers />
        </Body>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
