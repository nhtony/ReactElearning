import * as types from '../contants/Course.contant';
import Axios from 'axios';
import { API_GET_COURSE_INFORMATION } from '../../common/Config';


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