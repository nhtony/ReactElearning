import * as types from '../contants/Course.contant';
import {  listTypes } from '../../common/Config';
import swal from 'sweetalert2';
import CourseService from '../../services/Course.service';



export const getDetailCourseAction = (idcourse) => {
    return (dispatch) => {
        dispatch({ type: types.GET_DETAIL_COURSE['REQUEST'] });
        CourseService.getCourseDetail(idcourse).then((res) => {
            setTimeout(() => {
                dispatch(action(types.GET_DETAIL_COURSE['SUCCESS'], res.data));
            }, 1000);

        }).catch((err) => {
            dispatch(action(types.GET_DETAIL_COURSE['FAILED'], err.response.data));
        })
    }
}
export const getListAction = (username, listType) => {
    return (dispatch) => {
        CourseService.getListCourse(username, listType).then((res) => {
            dispatch(getList(listType, res.data));
        }).catch((err) => {
            console.log("TCL: getListAction -> err", err.response.data)
        })
    }
}

export const getMyCoursestAction = (username) => {
    return (dispatch) => {
        dispatch({ type: types.GET_ENROLL_COURSES['REQUEST'] });
        CourseService.getMyCourses(username).then((res) => {
            setTimeout(() => {
                dispatch(action(types.GET_ENROLL_COURSES['SUCCESS'],res.data));
            }, 1000);
        }).catch((err) => {
            console.log("TCL: getMyCoursestAction -> err", err)
        })
    }
}

export const getAprrovingAction = (username) => {
    return (dispatch) => {
        dispatch({ type: types.GET_WAITING_ENROLL_COURSES['REQUEST'] });
        CourseService.getWaitingCourse(username).then((res) => {
            setTimeout(() => {
                dispatch(action(types.GET_WAITING_ENROLL_COURSES['SUCCESS']), res.data);
            }, 1000);
        }).catch((err) => {
            console.log("TCL: getMyCoursestAction -> err", err)
        })
    }
}

export const courseAction = (idcourse, username, listType) => {
    return (dispatch) => {
       CourseService.courseAction(idcourse,username,listType).then((res) => {
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
const action = (type, payload) => ({
    type,
    payload
})