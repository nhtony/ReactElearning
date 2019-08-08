import Axios from 'axios';
import { API_GET_COURSE_LIST, API_ADD_COURSE, API_EDIT_COURSE, API_UPLOAD_HINH, API_GET_CATEGORIES } from '../../common/Config';
import * as types from '../contants/ListCourse.contant';
import { getLocalStorage, token, API_FIND_COURSE_BY_NAME, GP } from '../../common/Config';
import swal from 'sweetalert2';

export const getListCourseAction = () => {
    return (dispatch) => {
        Axios({
            method: 'GET',
            url: API_GET_COURSE_LIST
        }).then((res) => {
            dispatch(getListCourse(res.data));
        }).catch((err) => {
            console.log("TCL: getListCourseAction -> err", err)
        })
    }
}

export const addCourseAction = (course, fd) => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: API_ADD_COURSE,
            data: course,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(token)
            }
        }).then((res) => {
            let isSuccess = true;
            successAlert('Add user success !');
            dispatch({ type: types.ADD_COURSE, status: isSuccess });
            Axios({
                method: 'POST',
                url: API_UPLOAD_HINH,
                data: fd
            }).then((res) => {
                console.log("TCL: addCourseAction -> res", res.data)
            }).catch((err) => {
                swal.fire("Message", err.response.data, 'error')
            })
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
        })
    }
}

export const editCourseAction = (courseedit, fd) => {
    return (dispatch) => {
        Axios({
            method: 'PUT',
            url: API_EDIT_COURSE,
            data: courseedit,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(token)
            }
        }).then((res) => {
            let isSuccess = true;
            successAlert('Edit user success !');
            dispatch({ type: types.EDIT_COURSE, status: isSuccess });
            Axios({
                method: 'POST',
                url: API_UPLOAD_HINH,
                data: fd
            }).then((res) => {
                console.log("TCL: addCourseAction -> res", res.data)
            }).catch((err) => {
                swal.fire("Message", err.response.data, 'error')
            })
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error')
        })
    }
}

export const findCourseAction = (name) => {
    let uri = (name) ? API_FIND_COURSE_BY_NAME + name + `&MaNhom=${GP}` : API_GET_COURSE_LIST;
    return (dispatch) => {
        Axios({
            method: 'GET',
            url: uri
        }).then((res) => {
            dispatch(findCourse(res.data));
        }).catch((err) => {
            dispatch({
               type: types.FIND_COURSE,
               mess: err.response.data,
            });
        })
    }
}

export const getCategoriesAction = () => {
    return (dispatch) => {
        Axios({
            method: 'GET',
            url: API_GET_CATEGORIES
        }).then((res) => {
            dispatch(getCategories(res.data));
        }).catch((err) => {
            console.log("TCL: getListCourse -> err", err)
        })
    }
}

export const getListCourse = (courses) => {
    return {
        type: types.GET_LIST_COURSE,
        courses
    }
}

export const getCategories = (categories) => {
    return {
        type: types.GET_CATEGORIES,
        categories
    }
}

export const findCourse = (listSearch) => {
    return {
        type: types.FIND_COURSE,
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

