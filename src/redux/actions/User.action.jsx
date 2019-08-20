import * as types from '../contants/User.contant';
import Axios from 'axios';
import { API_USER_SIGN_UP, API_USER_LOGIN, token, loginInfo, setLocalStorage, API_USER_PROFILE, getLocalStorage } from '../../common/Config';
import swal from 'sweetalert2';
import { userLogoutStorage } from '../../common/Config';

export const signUpAction = (userInfo) => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: API_USER_SIGN_UP,
            data: userInfo
        }).then((res) => {
            if (res.data) {
                successAlert();
            }
            dispatch({ type: types.USER_SIGN_UP });
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
        })
    }
}

export const loginAction = (userInfo) => {
    let userLogin = {
        taiKhoan: '',
        hoTen: ''
    }
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: API_USER_LOGIN,
            data: userInfo
        }).then((res) => {
            userLogin.taiKhoan = res.data.taiKhoan;
            userLogin.hoTen = res.data.hoTen;
            setLocalStorage(token, res.data.accessToken);
            setLocalStorage(loginInfo, userLogin);
            dispatch({ type: types.USER_LOGIN, userLogin });
            successAlert('Sign up success');
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
                "Authorization": "Bearer  " + getLocalStorage(token)
            }
        }).then((res) => {
            dispatch({ type: types.USER_PROFILE, payload: res.data });
        }).catch((err) => {
            console.log("TCL: getProfileAction -> err", err.response.data)
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

