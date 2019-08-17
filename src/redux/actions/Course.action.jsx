import * as types from '../contants/Course.contant';
import Axios from 'axios';
import { getLocalStorage, token, API_GET_COURSE_INFORMATION, API_ENROLL, API_DISENROLL, listTypes } from '../../common/Config';
import swal from 'sweetalert2';

export const getInfoCourseAction = (idcourse) => {
    return (dispatch) => {
        Axios({
            method: 'GET',
            url: API_GET_COURSE_INFORMATION + idcourse,
        }).then((res) => {
            dispatch({ type: types.GET_INFO_COURSE, courseDetail: res.data });
        }).catch((err) => {
            console.log("TCL: signUpAction -> err", err)
        })
    }
}

export const courseAction = (idcourse, username, listType) => {
    let uri = (listType === listTypes.student) ? API_DISENROLL : API_ENROLL;
    let regObj = {
        "maKhoaHoc": idcourse,
        "taiKhoan": username
    }
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: uri,
            data: regObj,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(token)
            }
        }).then((res) => {
            dispatch(dispatchCourse(listType,res.data));
            successAlert(res.data);
        }).catch((err) => {
            console.log("TCL: signUpAction -> err", err.response.data);
        })
    }
}

const dispatchCourse = (listType,data) => {
    return (listType === listType.student) ? {type: types.DISENROLL,message: data} : {type: types.ENROLL,message: data}
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