import * as types from '../contants/User.contant';
import Axios from 'axios';
import { API_USER_SIGN_UP, API_USER_LOGIN, token, loginInfo, setLocalStorage } from '../../common/Config';
import swal from 'sweetalert2';

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
            dispatch({ type: types.USER_SIGN_UP});
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
            if (res.data) {
                successAlert();
            }
            dispatch({ type: types.USER_LOGIN,userLogin});
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
        })
    }
}

const successAlert = () => {
    swal.fire({
        position: 'center',
        type: 'success',
        title: 'Sign up success',
        showConfirmButton: false,
        timer: 1000
    })
}

