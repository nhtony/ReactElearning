import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { decodeToken } from '../DecodeToken';
import { loginInfo, getLocalStorage } from '../../common/Config';

const AdminAuth = ({ path, Component }) => {

    let deVal = "";
    if (getLocalStorage(loginInfo)) {
        const accesstoken = getLocalStorage(loginInfo).accessToken;
        deVal = Object.values(decodeToken(accesstoken));
    }

    return (
        <Route path={path} render={(routeProps) => {
            return (deVal[1] === "GV") ? <Component {...routeProps} /> : <Redirect to="/admin/login"></Redirect>
        }} />
    );
};
export default AdminAuth;