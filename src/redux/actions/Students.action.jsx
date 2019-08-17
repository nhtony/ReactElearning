import * as types from '../contants/Students.contant';
import Axios from 'axios';
import { API_GET_STUDENT_OF_COURSE, API_GET_UNREGISTERED_USERS, API_GET_WATTING_USERS, getLocalStorage, token, listTypes } from '../../common/Config';

export const getListAction = (idcourse, listType) => {
    let uri = "";
    switch (listType) {
        case listTypes.student:
            uri = API_GET_STUDENT_OF_COURSE;
            break;
        case listTypes.notstudent:
            uri = API_GET_UNREGISTERED_USERS;
            break;
        case listTypes.waittinguser:
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
                "Authorization": "Bearer " + getLocalStorage(token)
            }
        }).then((res) => {
            dispatch(getList(listType, res.data));
        }).catch((err) => {
            console.log("TCL: getListAction -> err", err)
        })
    }
}

const getList = (listType, data) => {
    switch (listType) {
        case listTypes.student:
            return { type: types.GET_STUDENTS, students: data }
        case listTypes.notstudent:
            return { type: types.GET_UNRESGISTERED_USER, notstudents: data }
        case listTypes.waittinguser:
            return { type: types.GET_APPROVING_USER, waittinguser: data }
        default:
            break;
    }
}




