import Axios from 'axios';
import { API_GET_COURSE_LIST } from '../../common/Config';
import * as types from '../contants/ListCourse.contant';

export const getListCourse = () => {
    return (dispatch) => {
        Axios({
            method: 'GET',
            url: API_GET_COURSE_LIST
        }).then((res) => {
            dispatch(getListCourseAction(res.data));
        }).catch((err) => {
            console.log("TCL: getListCourse -> err", err)
        })
    }
}

export const getListCourseAction = (courses) => {
    return {
        type: types.GET_LIST_COURSE,
        courses
    }
}
