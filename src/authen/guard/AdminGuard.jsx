import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { adminLogin, getLocalStorage } from '../../common/Config';

const AdminAuth = ({ path, Component }) => {
    return (
        <Route path={path} render={(routeProps) => {
            return (getLocalStorage(adminLogin).accessToken) ? <Component {...routeProps} /> : <Redirect to="/admin/login"></Redirect>
        }} />
    );
};
export default AdminAuth;