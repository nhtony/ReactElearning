import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/common/Header';
import SidebarSignUp from '../components/common/SidebarSignUp';
import SidebarLogin from '../components/common/SidebarLogin';
import Home from '../pages/home/Home';
import CourseDetail from '../pages/home/CourseDetail';
import CourseCategory from '../pages/home/CourseCategory';
import AuthorProfile from '../pages/home/AuthorProfile';
import MyCourses from '../pages/home/MyCourses';
import MyProfile from '../pages/home/MyProfile';
import MyPlayer from '../pages/home/MyPlayer';
import CanDirective from '../authen/guard/CanDirective';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import Result from '../pages/home/Result';
import Footer from '../components/common/Footer';

export default class HomeTemplate extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header {...this.props}></Header>
        <Switch>
          <Route path={'/home/course/category/:mdm/:name'} component={CourseCategory}></Route>
          <Route path={'/home/course/detail/:mkh'} component={CourseDetail}></Route>
          <Route path={'/home/course/search/:tkh'} component={Result}></Route>
          <Route path={'/home/author/profile/:name'} component={AuthorProfile}></Route>
          <CanDirective path={'/home/my/profile/:tk'} Component={MyProfile}></CanDirective>
          <CanDirective path={'/home/my/player/:mkh'} Component={MyPlayer}></CanDirective>
          <CanDirective path={'/home/my/courses/:tk'} Component={MyCourses}></CanDirective>
          <Route path={''} component={Home}>
          </Route>
        </Switch>
        <Footer></Footer>
        <ScrollUpButton />
        <SidebarSignUp></SidebarSignUp>
        <SidebarLogin></SidebarLogin>
      </BrowserRouter>
    )
  }
}
