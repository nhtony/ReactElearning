import * as types from '../contants/Course.contant';
import Axios from 'axios';
import { API_GET_COURSE_INFORMATION, API_GET_ENROLL_COURSES, API_GET_NOT_ENROLL_COURSES, API_GET_WAITING_COURSES, API_ENROLL, API_DISENROLL, listTypes, getLocalStorage, loginInfo } from '../../common/Config';
import swal from 'sweetalert2';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW5oYW8iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJHViIsIm5iZiI6MTU2ODIwNzIzOCwiZXhwIjoxNTY4MjEwODM4fQ.1YfkMFGVjQE74p3MJkfTPydEZ4n59Pp3npffYjl9vA4"

export const getDetailCourseAction = (idcourse) => {
    return (dispatch) => {
        dispatch({ type: types.GET_DETAIL_COURSE['REQUEST'] });
        Axios({
            method: 'GET',
            url: API_GET_COURSE_INFORMATION + idcourse,
        }).then((res) => {
            setTimeout(() => {
                dispatch({
                    type: types.GET_DETAIL_COURSE['SUCCESS'],
                    payload: res.data
                });
            }, 1000);

        }).catch((err) => {
            dispatch({
                type: types.GET_DETAIL_COURSE['FAILED'],
                payload: err.response.data
            });
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
            console.log("TCL: getListAction -> err", err)
        })
    }
}

export const getMyCoursestAction = (username) => {

    return (dispatch) => {
        dispatch({ type: types.GET_ENROLL_COURSES['REQUEST'] });
        Axios({
            method: 'POST',
            url: API_GET_ENROLL_COURSES,
            data: {
                "taiKhoan": username
            },
            headers:
            {
                "Authorization": "Bearer " +
                    token
            }
        }).then((res) => {
            setTimeout(() => {
                dispatch({
                    type: types.GET_ENROLL_COURSES['SUCCESS'],
                    payload: res.data
                });
            }, 1000);

        }).catch((err) => {
            console.log("TCL: getMyCoursestAction -> err", err)
        })
    }
}

export const getAprrovingAction = (username) => {
    return (dispatch) => {
        dispatch({ type: types.GET_WAITING_ENROLL_COURSES['REQUEST'] });
        Axios({
            method: 'POST',
            url: API_GET_WAITING_COURSES,
            data: {
                "taiKhoan": username
            },
            headers:
            {
                "Authorization": "Bearer " +
                token
            }
        }).then((res) => {
            setTimeout(() => {
                dispatch({
                    type: types.GET_WAITING_ENROLL_COURSES['SUCCESS'],
                    payload: res.data
                });
            }, 1000);
        }).catch((err) => {
            console.log("TCL: getMyCoursestAction -> err", err)
        })
    }
}

export const courseAction = (idcourse, username, listType) => {
    let uri = (listType === listTypes.course.isenroll) ? API_DISENROLL : API_ENROLL;
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
            return {
                type: types.GET_ENROLL_COURSES['SUCCESS'],
                payload: data
            }
        case listTypes.course.notenroll:
            return { type: types.GET_NOT_ENROLL_COURSES, payload: data }
        case listTypes.course.waitingenroll:
            return { type: types.GET_WAITING_ENROLL_COURSES['SUCCESS'], payload: data }
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
