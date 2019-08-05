import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from '../pages/Admin';
import AddUser from '../pages/AddUser';
import EditUser from '../pages/EditUser';
export default class HomeTemplate extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Switch>
                        <Route path={'/admin/add-user'} component={AddUser}></Route>
                        <Route path='/admin/edit-user/:tk' component={EditUser}></Route>
                        <Route path={''} component={Admin}></Route>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        )
    }
}