import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from '../pages/admin/Admin';
import AddUser from '../pages/admin/AddUser';
import EditUser from '../pages/admin/EditUser';
import AddCourse from '../pages/admin/AddCourse';
// import EditCourse from '../pages/admin/EditCourse';
import AdminUsers from '../pages/admin/AdminUsers';
import AdminCourses from '../pages/admin/AdminCourses';
import EditCourse from '../pages/admin/EditCourse';
import RegisterUser from '../pages/admin/RegisterUser';
export default class HomeTemplate extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Switch>
                        <Route path={'/admin/add-user'} component={AddUser}></Route>
                        <Route path={'/admin/add-course'} component={AddCourse}></Route>
                        <Route path={'/admin/register-user/:mkh'} component={RegisterUser}></Route>
                        <Route path={'/admin/edit-user/:tk'} component={EditUser}></Route>
                        <Route path={'/admin/edit-course/:mkh'} component={EditCourse}></Route>
                        <Route path={'/admin/users'} component={AdminUsers}></Route>
                        <Route path={'/admin/courses'} component={AdminCourses}></Route>
                        <Route path={''} component={Admin}></Route>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        )
    }
}