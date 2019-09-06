import * as types from '../contants/Review.contant';
export const submitReviewAction = (comment) => {
    return {
        type: types.SUBMIT_A_COMMENT,
        payload: comment,
    }
}

export const getIDAction = (idcourse) => {
    return {
        type: types.GET_COURSE_FROM_STORAGE,
        idcourse: idcourse
    }
}

