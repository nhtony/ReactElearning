import Axios from 'axios';

import { API_GET_COURSE_LIST, API_ADD_COURSE, API_EDIT_COURSE, API_UPLOAD_HINH, API_GET_CATEGORIES, API_DELETE_COURSE, API_FIND_COURSE_BY_NAME, API_GET_CATE_COURSES, GP, getLocalStorage, loginInfo } from '../../common/Config';

import * as types from '../contants/Courses.contant';

import swal from 'sweetalert2';

export const getListCourseAction = () => {
    return (dispatch) => {
        dispatch({ type: types.GET_COURSES['REQUEST'] });
        Axios.get(API_GET_COURSE_LIST)
            .then((res) => {
                setTimeout(() => {
                    dispatch({
                        type: types.GET_COURSES['SUCCESS'],
                        payload: res.data
                    });
                }, 2500);
            }).catch((err) => {
                dispatch({
                    type: types.GET_COURSES['SUCCESS'],
                    payload: err
                });
            })
    }
}

export const addCourseAction = (course, fd) => {
    return (dispatch) => {
        dispatch({ type: types.ADD_COURSE['REQUEST'] });
        Axios({
            method: 'POST',
            url: API_ADD_COURSE,
            data: course,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(loginInfo).accessToken
            }
        }).then((res) => {
            successAlert('Add user success !');
            dispatch({ type: types.ADD_COURSE['SUCCESS'], payload: res.data });
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
        dispatch({ type: types.EDIT_COURSE['REQUEST'] });
        Axios({
            method: 'PUT',
            url: API_EDIT_COURSE,
            data: courseedit,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(loginInfo).accessToken
            }
        }).then((res) => {
            successAlert('Edit user success !');
            dispatch({ type: types.EDIT_COURSE['SUCCESS'], payload: res.data });
            Axios({
                method: 'POST',
                url: API_UPLOAD_HINH,
                data: fd
            }).then((res) => {
                console.log("TCL: addCourseAction -> res", res.data)
            }).catch((err) => {
                console.log("TCL: editCourseAction -> err", err)
            })
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error')
        })
    }
}

export const deleteCourseAction = (idcourse) => {
    return (dispatch) => {
        dispatch({ type: types.DELETE_COURSE['REQUEST'] });
        Axios({
            method: 'DELETE',
            url: API_DELETE_COURSE + idcourse,
            headers:
            {
                "Authorization": "Bearer " + getLocalStorage(loginInfo).accessToken
            }
        }).then((res) => {
            dispatch({ type: types.DELETE_COURSE['SUCCESS'], payload: idcourse });
            successAlert(res.data);
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
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
        dispatch({ type: types.GET_CATEGORIES['REQUEST'] });
        Axios({
            method: 'GET',
            url: API_GET_CATEGORIES
        }).then((res) => {

            dispatch({ type: types.GET_CATEGORIES['SUCCESS'], payload: res.data });
        }).catch((err) => {
            dispatch({ type: types.GET_CATEGORIES['FAILED'], payload: err.response.data });
        })
    }
}

export const getCateCourseAction = (cateID) => {
    let uri = API_GET_CATE_COURSES + `?maDanhMuc=${cateID}&MaNhom=${GP}`
    return (dispatch) => {
        dispatch({ type: types.GET_CATEGORY_COURSES['REQUEST'] });
        Axios({
            method: 'GET',
            url: uri
        }).then((res) => {
            setTimeout(() => {
                dispatch({ type: types.GET_CATEGORY_COURSES['SUCCESS'], payload: res.data });
            }, 300);
        }).catch((err) => {
            dispatch({ type: types.GET_CATEGORY_COURSES['FAILED'], payload: err.response.data });
        })
    }
}

const findCourse = (listSearch) => {
    return {
        type: types.FIND_COURSE,
        listSearch: listSearch
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

