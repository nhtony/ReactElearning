import * as types from '../contants/Course.contant';
import Axios from 'axios';
import { API_GET_COURSE_INFORMATION, API_GET_ENROLL_COURSES, API_GET_NOT_ENROLL_COURSES, API_GET_WAITING_COURSES, API_ENROLL, API_DISENROLL, listTypes, getLocalStorage, loginInfo } from '../../common/Config';
import swal from 'sweetalert2';


export const getInfoCourseAction = (idcourse) => {
    return (dispatch) => {
        Axios({
            method: 'GET',
            url: API_GET_COURSE_INFORMATION + idcourse,
        }).then((res) => {
            dispatch({
                type: types.GET_INFO_COURSE, courseDetail: res.data
            });
        }).catch((err) => {
            console.log("TCL: getInfoCourseAction -> err", err)
        })
    }
}
export const getListAction = (username, listType) => {
    let uri = "";
    switch (listType) {
        case listTypes.course.isenroll:
            uri = API_GET_ENROLL_COURSES;
            break;
        case listTypes.course.notenroll:
            uri = API_GET_NOT_ENROLL_COURSES;
            break;
        case listTypes.course.waitingenroll:
            uri = API_GET_WAITING_COURSES;
            break;
        default:
            break;
    }
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: uri,
            data: {
                "taiKhoan": username
            },
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(loginInfo).accessToken
            }
        }).then((res) => {
            dispatch(getList(listType, res.data));
        }).catch((err) => {
            console.log("TCL: getListAction -> err", err.response.data)
        })
    }
}

export const courseAction = (idcourse, username, listType) => {
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
            dispatch(dispatchCourse(listType, idcourse));
            successAlert(res.data);
        }).catch((err) => {
            console.log("TCL: signUpAction -> err", err.response.data);
        })
    }
}

const getList = (listType, data) => {
    switch (listType) {
        case listTypes.course.isenroll:
            return { type: types.GET_ENROLL_COURSES, payload: data }
        case listTypes.course.notenroll:
            return { type: types.GET_NOT_ENROLL_COURSES, payload: data }
        case listTypes.course.waitingenroll:
            return { type: types.GET_WAITING_ENROLL_COURSES, payload: data }
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
