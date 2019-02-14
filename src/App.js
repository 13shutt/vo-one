import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { initStyles } from './styles'
import Routers from './view/Routers'

initStyles()

const original = {
  primaryColor: "#440099", // ${props => props.theme.primaryColor};
  secondaryColor: "#000000", // ${props => props.theme.secondaryColor};
  backgroundColor: "#000", // ${props => props.theme.backgroundColor};
  textHighLightColor: "#FFFFFF", // ${props => props.theme.textHighLightColor};
  textHighLightBg: "#9973C7" // ${props => props.theme.textHighLightBg};
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={original}>
          <Routers />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
