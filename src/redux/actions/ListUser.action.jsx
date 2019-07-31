import Axios from 'axios';
import { API_GET_USER_LIST, API_ADD_USER } from '../../common/Config';
import * as types from '../contants/ListUser.contant';

export const getListUserAction = () => {
    return (dispatch) => {
        Axios({
            method: 'GET',
            url: API_GET_USER_LIST
        }).then((res) => {
            dispatch(getListUser(res.data));
        }).catch((err) => {
            console.log("TCL: getListUser -> err", err);
        })
    }
}

export const addUserAction = () => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: API_ADD_USER
        }).then((res) => {
            console.log("TCL: addUserAction -> res", res)
            dispatch(addUser(res.data));
        }).catch((err) => {
            console.log("TCL: getListUser -> err", err);
        })
    }
}

export const getListUser = (users) => {
    return {
        type: types.GET_LIST_USER,
        users
    }
}

export const addUser = (user) => {
    return {
        type: types.ADD_USER,
        data: user
    }
}