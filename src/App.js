import React, { lazy, Suspense } from 'react'
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageNotFound from './common/PageNotFound';
import AdminAuth from './authen/guard/AdminGuard';
import LoginAdmin from './pages/admin/LoginAdmin';

const AdminTemplate = lazy(() => import('./templates/AdminTemplate'));
const HomeTemplate = lazy(() => import('./templates/HomeTemplate'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={'/home'} component={HomeTemplate}></Route>
          <Route path={'/admin/login'} component={LoginAdmin}></Route>
          <AdminAuth path={'/admin'} Component={AdminTemplate}></AdminAuth>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
