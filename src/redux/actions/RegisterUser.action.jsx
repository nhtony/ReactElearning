import Axios from 'axios';
import { API_GET_UNREGISTERED_USERS } from '../../common/Config';
import * as types from '../contants/RegisterUser.contant';
export const getUregUsersAction = (idCourse) => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: API_GET_UNREGISTERED_USERS,
            data: idCourse
        }).then((res) => {
            console.log("TCL: getUregUsersAction -> res", res.data)
            dispatch({
                type: types.GET_UNREGISTER_USERS,
                data: res.data
            })
        }).catch((err) => {
            console.log("TCL: getUregUsersAction -> err", err.response.data)
        })
    }
}