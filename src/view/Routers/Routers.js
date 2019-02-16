import React, { Component } from 'react'
import { Switch, Link, Route } from 'react-router-dom'

import { Header, Wrapper } from 'components'
import Home from 'view/Home'
import About from 'view/About'
import Contacts from 'view/Contacts'

export default class AppContainer extends Component {
  render() { 
    return (
      <Wrapper main>
        <Wrapper body>
          <Header>
            <h5><Link to="/home">home</Link></h5>
            <h5><Link to="/about">about</Link></h5>
            <h5><Link to="/contacts">contacts</Link></h5>
          </Header>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/vo-one/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </Wrapper>
      </Wrapper>
    )
  }
}