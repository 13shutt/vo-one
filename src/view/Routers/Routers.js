import React, { Component } from 'react'
import { Switch, Link, Route } from 'react-router-dom'

import { Header } from '../../components'
import Home from '../Home'
import About from '../About'
import Contacts from '../Contacts'

export default class AppContainer extends Component {
  render() { 
    return (
      <section>
        <Header>
          <h5><Link to="/home">home</Link></h5>
          <h5><Link to="/about">about</Link></h5>
          <h5><Link to="/contacts">contacts</Link></h5>
        </Header>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </section>
    )
  }
}