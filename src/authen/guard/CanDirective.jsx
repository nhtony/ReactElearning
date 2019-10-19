import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { userLogin } from '../../common/Config';
const CanDirective = ({ path, Component }) => {
    return (
        <Route path={path} render={(routeProps) => {
            return (localStorage.getItem(userLogin)) ? <Component {...routeProps} /> : <Redirect to="/home"></Redirect>
        }} />
    );
};
export default CanDirective;