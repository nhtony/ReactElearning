import * as types from '../contants/Students.contant';
import { listTypes } from '../../common/Config';
import swal from 'sweetalert2';
import StudentService from '../../services/Student.service';

export const getListAction = (idcourse, listType) => {
    return (dispatch) => {
        StudentService.getList(idcourse, listType).then((res) => {
            dispatch(getList(listType, res.data));
        }).catch((err) => {
            console.log("TCL: getListAction -> err", err)
        })
    }
}

export const studentAction = (idcourse, username, listType) => {
    return (dispatch) => {
        StudentService.studentAction(idcourse, username, listType).then((res) => {
            dispatch(dispatchCourse(listType, username));
            successAlert(res.data);
        }).catch((err) => {
            console.log("TCL: signUpAction -> err", err);
        })
    }
}

export const setNoifyAction = (noti, taiKhoan) => {
    return (dispatch) => {
        dispatch({
            type: types.SET_NOTIFY,
            payload: {
                noti,
                taiKhoan
            }
        })
    }
}

export const readNoifyAction = (taiKhoan, maKhoaHoc) => {
    return (dispatch) => {
        dispatch({
            type: types.READ_NOTIFY,
            payload: {
                taiKhoan,
                maKhoaHoc
            }
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

