import React, { lazy, Suspense } from 'react'
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import AdminAuth from './authen/guard/AdminGuard';
import LoginAdmin from './pages/admin/LoginAdmin';
import LoadingService from './common/LoadingService';

const HomeTemplate = lazy(() => import('./templates/HomeTemplate'));



const AdminTemplate = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./templates/AdminTemplate')), 1000)
  })
});


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingService />}>
        <Switch>
          <Route path={'/home'} component={HomeTemplate}>
          </Route>
          <Route path={'/admin/login'} component={LoginAdmin}></Route>
          <AdminAuth path={'/admin'} Component={AdminTemplate}>
          </AdminAuth>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Suspense>
 
    </BrowserRouter >
  );
}



export default App;
