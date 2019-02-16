import React, { Component } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";

import { Header, Wrapper } from "components";
import Home from "view/Home";
import About from "view/About";
import Contacts from "view/Contacts";

export default class AppContainer extends Component {

  render() {
    return (
      <Wrapper main>
        <Wrapper body>
          <Header>
            <h5>
              <NavLink to="/home" activeStyle={{ color: "black" }}>
                home
              </NavLink>
            </h5>
            <h5>
              <NavLink to="/about" activeStyle={{ color: "black" }}>
                about
              </NavLink>
            </h5>
            <h5>
              <NavLink to="/contacts" activeStyle={{ color: "black" }}>
                contacts
              </NavLink>
            </h5>
          </Header>

          <Redirect from="/" to="/home" component={Home} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/vo-one/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </Wrapper>
      </Wrapper>
    );
  }
}
