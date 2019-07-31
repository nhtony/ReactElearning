import React, { Fragment } from 'react'
import './App.scss';
import AdminTemplate from './templates/AdminTemplate';
import HomeTemplate from './templates/HomeTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route path={'/admin'} component={AdminTemplate}></Route>
          <Route path={'/home'} component={HomeTemplate}></Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}
export default App;
