import * as types from '../contants/User.contant';
import Axios from 'axios';
import { API_USER_SIGN_UP, API_USER_LOGIN, loginInfo, setLocalStorage, API_USER_PROFILE, API_USER_ENROLL, getLocalStorage } from '../../common/Config';
import swal from 'sweetalert2';
import { userLogoutStorage } from '../../common/Config';

export const signUpAction = (userInfo) => {
    return (dispatch) => {
        dispatch({ type: types.USER_SIGN_UP['REQUEST'] });
        Axios({
            method: 'POST',
            url: API_USER_SIGN_UP,
            data: userInfo
        }).then((res) => {
            successAlert("Sign up success");
            dispatch({ type: types.USER_SIGN_UP['SUCCESS'], payload: res.data });
        }).catch((err) => {
            console.log("TCL: signUpAction -> err", err.response.data)
        })
    }
}

export const loginAction = (userInfo, avt) => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: API_USER_LOGIN,
            data: userInfo
        }).then((res) => {
            const userLogin = {
                taiKhoan: res.data.taiKhoan,
                hoTen: res.data.hoTen,
                avatar: avt,
                accessToken: res.data.accessToken
            }
            setLocalStorage(loginInfo, userLogin);
            dispatch({ type: types.USER_LOGIN['SUCCESS'], payload: res.data });
            successAlert("Login success");
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
        })
    }
}

export const getProfileAction = (username) => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: API_USER_PROFILE,
            data: {
                "taiKhoan": username
            },
            headers: {
                "Authorization": "Bearer  " + getLocalStorage(loginInfo).accessToken
            }
        }).then((res) => {
            dispatch({ type: types.USER_PROFILE, payload: res.data });
        }).catch((err) => {
            console.log("TCL: getProfileAction -> err", err.response.data)
        })
    }
}

export const userEnrollAction = (data) => {
    return (dispatch) => {
        dispatch({ type: types.USER_ENROLL['REQUEST'] });
        Axios({
            method: 'POST',
            url: API_USER_ENROLL,
            data: data,
            headers: {
                "Authorization": "Bearer  " + getLocalStorage(loginInfo).accessToken
            }
        }).then((res) => {
            dispatch({ type: types.USER_ENROLL['SUCCESS'], payload: res.data });
            successAlert("Enroll success");
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
        })
    }
}

export const userLogoutAction = () => {
    userLogoutStorage();
    return {
        type: types.USER_LOG_OUT
    }
}

const successAlert = (content) => {
    swal.fire({
        position: 'center',
        type: 'success',
        title: content,
        showConfirmButton: false,
        timer: 1000
    })
}

