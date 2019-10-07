import * as types from '../contants/Courses.contant';
import CourseService from '../../services/Course.service';
import swal from 'sweetalert2';

export const getListCourseAction = () => {
    return (dispatch) => {
        dispatch({ type: types.GET_COURSES['REQUEST'] });
        CourseService.fetchCourses()
            .then((res) => {
                setTimeout(() => {
                    dispatch(action(types.GET_COURSES['SUCCESS'], res.data));
                }, 2500);
            }).catch((err) => {
                dispatch(action(types.GET_COURSES['FAILED'], err));
            })
    }
}

export const addCourseAction = (course, fd) => {
    return (dispatch) => {
        dispatch({ type: types.ADD_COURSE['REQUEST'] });
        CourseService.addCourse(course)
            .then((res) => {
                successAlert('Add user success !');
                dispatch(action(types.ADD_COURSE['SUCCESS'], res.data));
                CourseService.uploadFile(fd).then((res) => {
                }).catch((err) => {
                    swal.fire("Message", err.response.data, 'error')
                })
            }).catch((err) => {
                swal.fire("Message", err.response.data, 'error');
            })
    }
}

export const editCourseAction = (courseEdit, fd) => {
    return (dispatch) => {
        dispatch({ type: types.EDIT_COURSE['REQUEST'] });
        CourseService.editCourse(courseEdit).then((res) => {
            successAlert('Edit user success !');
            dispatch(action(types.EDIT_COURSE['SUCCESS'], res.data));
            CourseService.uploadFile(fd).then((res) => {
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
        CourseService.deleleCourse(idcourse).then((res) => {
            dispatch(action(types.DELETE_COURSE['SUCCESS'], res.data));
            successAlert(res.data);
        }).catch((err) => {
            swal.fire("Message", err.response.data, 'error');
        })
    }
}

export const findCourseAction = (name) => {
    return (dispatch) => {
        dispatch({
            type: types.FIND_COURSE['REQUEST']
        });
        CourseService.findCourse(name).then((res) => {
            setTimeout(() => {
                dispatch(action(types.FIND_COURSE['SUCCESS'], res.data));
            }, 1000);
        }).catch((err) => {
            dispatch(action(types.FIND_COURSE['FAILED'], err.response.data));
        })
    }
}

export const getCategoriesAction = () => {
    return (dispatch) => {
        dispatch({ type: types.GET_CATEGORIES['REQUEST'] });
        CourseService.getCategories().then((res) => {
            dispatch(action(types.GET_CATEGORIES['SUCCESS'], res.data));
        }).catch((err) => {
            console.log("TCL: getCategoriesAction -> err", err)
        })
    }
}

export const getCateCourseAction = (cateID) => {
    return (dispatch) => {
        dispatch({ type: types.GET_CATEGORY_COURSES['REQUEST'] });
        CourseService.getCourseByCategory(cateID).then((res) => {
            setTimeout(() => {
                dispatch(action(types.GET_CATEGORY_COURSES['SUCCESS'], res.data));
            }, 300);
        }).catch((err) => {
            dispatch({ type: types.GET_CATEGORY_COURSES['FAILED'], payload: err.response.data });
        })
    }
}

export const getCoursesPagination = () => {
    return (dispatch) => {
        dispatch({ type: types.GET_PAGINATION_COURSES['REQUEST'] });
        CourseService.fetchCoursesPagination().then(res => {
            dispatch(action(types.GET_PAGINATION_COURSES['SUCCESS'], res.data));
        }).catch(err => {
            console.log("TCL: getCoursesPagination -> err", err)
        })
    }

}

const action = (type, payload) => ({
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

