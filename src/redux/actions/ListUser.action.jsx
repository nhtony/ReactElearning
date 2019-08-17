import Axios from 'axios';

import { API_GET_USER_LIST, API_ADD_USER, API_EDIT_USER, API_FIND_USER_BY_NAME, API_DELETE_USER } from '../../common/Config';

import * as types from '../contants/ListUser.contant';

import { getLocalStorage, token } from '../../common/Config';
import swal from 'sweetalert2';

export const getListUserAction = () => {
    return (dispatch) => {
        Axios({
            method: 'GET',
            url: API_GET_USER_LIST
        }).then((res) => {
            dispatch(getListUser(res.data));
        }).catch((err) => {
            console.log("TCL: getListUser -> err", err.response.data);
        })
    }
}

export const findUserAction = (username) => {
    let uri = (username) ? API_FIND_USER_BY_NAME + '&tuKhoa=' + username : API_GET_USER_LIST;
    return (dispatch) => {
        Axios({
            method: 'GET',
            url: uri
        }).then((res) => {
            dispatch(findListUser(res.data));
        }).catch((err) => {
            console.log("TCL: findUserAction -> err", err.response.data)
        })
    }
}

export const addUserAction = (user) => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: API_ADD_USER,
            data: user,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(token)
            }
        }).then((res) => {
            let isSuccess = true;
            successAlert('Add user success !');
            dispatch({ type: types.ADD_USER, status: isSuccess });
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
        })
    }
}

export const editUserAction = (useredit) => {
    return (dispatch) => {
        Axios({
            method: 'PUT',
            url: API_EDIT_USER,
            data: useredit,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(token)
            }
        }).then((res) => {
            let isSuccess = true;
            successAlert('Edit user success !');
            dispatch({ type: types.EDIT_USER, status: isSuccess });
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error')
        })
    }
}

export const deleteUserAction = (username) => {
    return (dispatch) => {
        Axios({
            method: 'DELETE',
            url: API_DELETE_USER + username,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(token)
            }
        }).then((res) => {
            dispatch({type: types.DELETE_USER,username: username})
            successAlert(res.data);
        }).catch((err) => {
        console.log("TCL: deleteUserAction -> err", err)
            // swal.fire("Message", err.response.data, 'error');
        })
    }
}

export const getListUser = (users) => {
    return {
        type: types.GET_LIST_USER,
        users
    }
}

export const findListUser = (listSearch) => {
    return {
        type: types.FIND_USER,
        listSearch
    }
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


