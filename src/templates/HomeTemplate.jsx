import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/home/Header';
import LoadingService from '../common/LoadingService';

const CoureDetailTemplate = lazy(() => import('./CourseDetailTemplate'));

const CourseCategoryTemplate = lazy(() => import('./CourseCategoryTemplate'));

const AuthorProfileTemplate = lazy(() => import('./AuthorProfileTemplate'));
export default class HomeTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  preRender = () => {
    this.setState({
      loading: true
    })
  }


  render() {

    const Home = lazy(() => {
      return new Promise(resolve => {
        setTimeout(() => resolve(import('../pages/home/Home')), 500)
      })
    });

    return (
      <BrowserRouter>
        <Header></Header>
        <Suspense fallback={<LoadingService />}>
          <Switch>
            <Route path={'/home/course-detail/:mkh'} component={CoureDetailTemplate} ></Route>
            <Route path={'/home/course-category/:mdm/:name'} component={CourseCategoryTemplate} >
            </Route>
            <Route path={'/home/author-profile/:name'} component={AuthorProfileTemplate} ></Route>
            <Route path={''} component={Home}></Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    )
  }
}
