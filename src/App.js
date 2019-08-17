import React, { lazy, Suspense } from 'react'
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
const AdminTemplate = lazy(() => import('./templates/AdminTemplate'));
const HomeTemplate = lazy(() => import('./templates/HomeTemplate'));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={'/admin'} component={AdminTemplate}></Route>
          <Route path={'/home'} component={HomeTemplate}></Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
