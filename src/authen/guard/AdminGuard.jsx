import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { decodeToken } from '../DecodeToken';
import { loginInfo, getLocalStorage } from '../../common/Config';

const AdminAuth = ({ path, Component }) => {
    let role = "";
    if (localStorage.getItem(loginInfo)) {
        const accesstoken = getLocalStorage(loginInfo).accessToken;
        const deVal = Object.values(decodeToken(accesstoken));
        role = deVal[1];
    }
    else {
        role = "HV";
    }

    return (
        <Route path={path} render={(routeProps) => {
            return (role === "GV") ? <Component {...routeProps} /> : <Redirect to="/admin/login"></Redirect>
        }} />
    );
};
export default AdminAuth;