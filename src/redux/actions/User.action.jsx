import * as types from '../contants/User.contant';
import { userLogin, setLocalStorage, } from '../../common/Config';
import swal from 'sweetalert2';
import { userLogoutStorage } from '../../common/Config';
import UserService from '../../services/User.service';

export const signUpAction = (userInfo) => {
    return (dispatch) => {
        dispatch({ type: types.USER_SIGN_UP['REQUEST'] });
        UserService.signUp(userInfo).then((res) => {
            successAlert("Sign up success");
            dispatch({ type: types.USER_SIGN_UP['SUCCESS'], payload: res.data });
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
        })
    }
}

export const loginAction = (userInfo, avt) => {
    return (dispatch) => {
        UserService.login(userInfo).then((res) => {
            const objLogin = {
                taiKhoan: res.data.taiKhoan,
                hoTen: res.data.hoTen,
                avatar: avt,
                accessToken: res.data.accessToken
            }
            setLocalStorage(userLogin, objLogin);
            dispatch({ type: types.USER_LOGIN['SUCCESS'], payload: res.data });
            successAlert("Login success");
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
        })
    }
}

export const getProfileAction = (username, accessToken) => {
    return (dispatch) => {
        UserService.getProfilte(username, accessToken).then((res) => {
            dispatch({ type: types.USER_PROFILE['SUCCESS'], payload: res.data });
        }).catch((err) => {
            console.log("TCL: getProfileAction -> err", err.response.data)
        })
    }
}

export const userEnrollAction = (data) => {
   

    const obj = {
        maKhoaHoc: data.maKhoaHoc,
        taiKhoan: data.taiKhoan
    }
    return (dispatch) => {
        UserService.enrollCourse(obj).then((res) => {
            dispatch({ type: types.USER_ENROLL['SUCCESS'], payload: data });
            successAlert(res.data);
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

