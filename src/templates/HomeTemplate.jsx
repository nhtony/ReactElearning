import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/Home'));
export default class HomeTemplate extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={''} component={Home}></Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    )
  }
}
