import * as types from '../contants/Admin.contant';
import { adminLogin, setLocalStorage, userLogin } from '../../common/Config';
import swal from 'sweetalert2';
import UserService from '../../services/User.service';
export const adminLoginAction = (data) => {
    return (dispatch) => {
        UserService.login(data).then((res) => {
            const objLogin = {
                taiKhoan: res.data.taiKhoan,
                hoTen: res.data.hoTen,
                avt: '',
                accessToken: res.data.accessToken
            }
            if (res.data.maLoaiNguoiDung === "GV") {
                successAlert("Admin login success");
                setLocalStorage(adminLogin, objLogin);
                dispatch({ type: types.ADMIN_LOGIN });
            }
            else {
                swal.fire("Message", "Does not accept !!", 'error');
            }
        }).catch((err) => {
            swal.fire("Message", err, 'error');
        })
    }
}

export const adminLogoutAction = () => {
    localStorage.removeItem(adminLogin);
    localStorage.removeItem(userLogin);
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

