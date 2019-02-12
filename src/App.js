import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import { initStyles } from './styles'
import Routers from './view/Routers'

initStyles()

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
