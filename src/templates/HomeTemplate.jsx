import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
export default class HomeTemplate extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path={''} component={Home}></Route>
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}
