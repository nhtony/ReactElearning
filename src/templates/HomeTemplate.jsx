import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/genaral/Header';
import SidebarSignUp from '../components/genaral/SidebarSignUp';
import SidebarLogin from '../components/genaral/SidebarLogin';
import Home from '../pages/home/Home';
import CourseDetail from '../pages/home/CourseDetail';
import CourseCategory from '../pages/home/CourseCategory';
import AuthorProfile from '../pages/home/AuthorProfile';

export default class HomeTemplate extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path={'/home/course/category/:mdm/:name'} render={(props) => <CourseCategory {...props} />}></Route>
          <Route path={'/home/course/detail/:mkh'} render={(props) => <CourseDetail {...props} />}></Route>
          <Route path={'/home/author/profile/:name'} render={(props) => <AuthorProfile {...props} />}></Route>
          <Route path={''} component={Home}>
          </Route>
        </Switch>
        <SidebarSignUp></SidebarSignUp>
        <SidebarLogin></SidebarLogin>
      </BrowserRouter>
    )
  }
}

