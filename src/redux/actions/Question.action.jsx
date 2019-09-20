import * as types from '../contants/Question.contant';
export const submitQuestionAction = (question) => {
    return {
        type: types.SUBMIT_A_QUESTION,
        payload: question,
    }
}

export const getIDAction = (idcourse) => {
    return {
        type: types.GET_QUESTION_FROM_STORAGE,
        idcourse: idcourse
    }
}