import * as types from '../contants/Users.contant';
import swal from 'sweetalert2';
import UserService from '../../services/User.service';

export const getListUserAction = () => {
    return (dispatch) => {
        UserService.fetchUsers().then((res) => {
            dispatch(action(types.GET_LIST_USER,res.data));
        }).catch((err) => {
            console.log("TCL: getListUser -> err", err);
        })
    }
}

export const addUserAction = (user) => {
    return (dispatch) => {
     UserService.addUser(user).then((res) => {
            let isSuccess = true;
            successAlert('Add user success !');
            dispatch({ type: types.ADD_USER, status: isSuccess });
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
        })
    }
}

export const editUserAction = (userEdit) => {
    return (dispatch) => {
       UserService.editUser(userEdit).then((res) => {
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
        UserService.deleteUser(username).then((res) => {
            dispatch({ type: types.DELETE_USER, username: username })
            successAlert(res.data);
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error')
        })
    }
}

export const findUserAction = (name) => {
    return (dispatch) => {
      UserService.findUser(name).then((res) => {
            dispatch(action(types.FIND_USER,res.data));
        }).catch((err) => {
            console.log("TCL: findUserAction -> err.response.data", err.response.data)
        })
    }
}

const action = (type,payload) =>({
    type,
    payload
})

const successAlert = (content) => {
    swal.fire({
        position: 'center',
        type: 'success',
        title: content,
        showConfirmButton: false,
        timer: 1000
    })
}


