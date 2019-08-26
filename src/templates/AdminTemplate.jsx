import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/admin/Navbar';
import Sidebar from '../components/admin/Sidebar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Admin = lazy(() => import('../pages/admin/Admin'));
const UserAdd = lazy(() => import('../pages/admin/UserAdd'));
const UserEdit = lazy(() => import('../pages/admin/UserEdit'));
const CourseAdd = lazy(() => import('../pages/admin/CourseAdd'));
const Users = lazy(() => import('../pages/admin/Users'));
const Courses = lazy(() => import('../pages/admin/Courses'));
const CourseEdit = lazy(() => import('../pages/admin/CourseEdit'));
const Students = lazy(() => import('../pages/admin/Students'));
const StudentCourse = lazy(() => import('../pages/admin/StudentCourse'));

class AdminTemplate extends Component {
    renderTemplate = () => {
        return (
            <BrowserRouter>
                <div className="d-flex justify-content-between">
                    <Sidebar></Sidebar>
                    <div id="admin-wrapper">
                        <Navbar></Navbar>
                        <section id="admin-content" className="p-3">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Switch>
                                    <Route path={'/admin/add-user'} component={UserAdd}></Route>
                                    <Route path={'/admin/add-course'} component={CourseAdd}></Route>
                                    <Route path={'/admin/edit-user/:tk'} component={UserEdit}></Route>
                                    <Route path={'/admin/edit-course/:mkh'} component={CourseEdit}></Route>
                                    <Route path={'/admin/students/:mkh'} component={Students}></Route>
                                    <Route path={'/admin/course-of-student/:tk'} component={StudentCourse}></Route>
                                    <Route path={'/admin/users'} component={Users}></Route>
                                    <Route path={'/admin/courses'} component={Courses}></Route>
                                    <Route path={''} component={Admin}></Route>
                                </Switch>
                            </Suspense>
                        </section>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
    render() {
        return (this.props.isLogin) ? this.renderTemplate() : <Redirect to='/home'></Redirect>
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin: state.UserReducer.isLogin,
    }
}
export default connect(mapStateToProps, null)(AdminTemplate);