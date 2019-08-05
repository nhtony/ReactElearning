import Axios from 'axios';
import { API_GET_USER_LIST, API_ADD_USER, API_EDIT_USER,API_FIND_USER_BY_NAME } from '../../common/Config';
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
            console.log("TCL: getListUser -> err", err);
        })
    }
}

export const findUserAction = (username) => {
    return (dispatch) => {
        Axios({
            method: 'GET',
            url: API_FIND_USER_BY_NAME + username
        }).then((res) => {
            dispatch(findListUser(res.data));
        }).catch((err) => {
            console.log("TCL: getListUser -> err", err);
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
            swal.fire("Message", 'Edit Fail !', 'error')
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


