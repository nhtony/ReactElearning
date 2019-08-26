import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/home/Header';
import CourseDetail from '../pages/home/CourseDetail';
const Home = lazy(() => import('../pages/home/Home'));
export default class HomeTemplate extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={'/home/course-detail'} component={CourseDetail}></Route>
            <Route path={''} component={Home}></Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    )
  }
}
