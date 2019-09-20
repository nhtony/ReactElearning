import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loginInfo } from '../../common/Config';
const MyCourseAuth = ({ path, Component }) => {
    return (
        <Route path={path} render={(routeProps) => {
            return (localStorage.getItem(loginInfo)) ? <Component {...routeProps} /> : <Redirect to="/home"></Redirect>
        }} />
    );
};
export default MyCourseAuth;