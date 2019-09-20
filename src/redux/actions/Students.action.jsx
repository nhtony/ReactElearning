import * as types from '../contants/Students.contant';
import Axios from 'axios';
import { API_GET_STUDENT_OF_COURSE, API_GET_UNREGISTERED_USERS, API_GET_WATTING_USERS, getLocalStorage, loginInfo, listTypes, API_DISENROLL, API_ENROLL, setLocalStorage } from '../../common/Config';
import swal from 'sweetalert2';

export const getListAction = (idcourse, listType) => {
    let uri = "";
    switch (listType) {
        case listTypes.student.isstudent:
            uri = API_GET_STUDENT_OF_COURSE;
            break;
        case listTypes.student.notstudent:
            uri = API_GET_UNREGISTERED_USERS;
            break;
        case listTypes.student.waitinguser:
            uri = API_GET_WATTING_USERS;
            break;
        default:
            break;
    }
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: uri,
            data: {
                "MaKhoaHoc": idcourse
            },
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(loginInfo).accessToken
            }
        }).then((res) => {
            dispatch(getList(listType, res.data));
        }).catch((err) => {
            console.log("TCL: getListAction -> err", err)
        })
    }
}

export const studentAction = (idcourse, username, listType) => {
    let uri = (listType === listTypes.student.isstudent) ? API_DISENROLL : API_ENROLL;
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
                "Authorization": "Bearer " + getLocalStorage(loginInfo).accessToken
            }
        }).then((res) => {
            dispatch(dispatchCourse(listType, username));
            successAlert(res.data);
        }).catch((err) => {
            console.log("TCL: signUpAction -> err", err);
        })
    }
}

export const setNoifyAction = (noti) => {
    return (dispatch) => {
        dispatch({
            type: types.SET_NOTIFY,
            payload: noti
        })
    }
}

const getList = (listType, data) => {
    switch (listType) {
        case listTypes.student.isstudent:
            return { type: types.GET_STUDENTS, payload: data }
        case listTypes.student.notstudent:
            return { type: types.GET_UNRESGISTERED_USER, payload: data }
        case listTypes.student.waitinguser:
            return { type: types.GET_WATTING_USER, payload: data }
        default:
            break;
    }
}

const dispatchCourse = (listType, data) => {
    return (listType === listTypes.student.isstudent) ? { type: types.DISENROLL, payload: data } : { type: types.ENROLL, payload: data }
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

