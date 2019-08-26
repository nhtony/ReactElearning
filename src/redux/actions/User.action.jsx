import * as types from '../contants/User.contant';
import Axios from 'axios';
import { API_USER_SIGN_UP, API_USER_LOGIN, loginInfo, setLocalStorage, API_USER_PROFILE, getLocalStorage } from '../../common/Config';
import swal from 'sweetalert2';
import { userLogoutStorage } from '../../common/Config';

export const signUpAction = (userInfo) => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: API_USER_SIGN_UP,
            data: userInfo
        }).then(() => {
            successAlert("Sign up success");
            dispatch({ type: types.USER_SIGN_UP });
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
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
            dispatch({ type: types.USER_LOGIN });
            successAlert("Login success");
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
        })
    }
}

export const adminLoginAction = (userInfo) => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: API_USER_LOGIN,
            data: userInfo
        }).then((res) => {
            const userLogin = {
                taiKhoan: res.data.taiKhoan,
                hoTen: res.data.hoTen,
                avt: '',
                accessToken: res.data.accessToken
            }
            if (res.data.maLoaiNguoiDung === "GV") {
                const isAdLogin = true;
                successAlert("Login success");
                setLocalStorage(loginInfo, userLogin);
                dispatch({ type: types.ADMIN_LOGIN, payload: isAdLogin });
            }
            else {
                swal.fire("Message", "Does not accept !!", 'error');
            }
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

