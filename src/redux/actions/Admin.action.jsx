import * as types from '../contants/Admin.contant';
import Axios from 'axios';
import { API_USER_LOGIN, loginInfo, setLocalStorage, userLogoutStorage } from '../../common/Config';
import swal from 'sweetalert2';
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
                successAlert("Admin login success");
                setLocalStorage(loginInfo, userLogin);
                dispatch({ type: types.ADMIN_LOGIN });
            }
            else {
                swal.fire("Message", "Does not accept !!", 'error');
            }
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
        })
    }
}

export const adminLogoutAction = () => {
    userLogoutStorage();
    return {
        type: types.ADMIN_LOG_OUT
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

