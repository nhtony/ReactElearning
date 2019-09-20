import * as types from '../contants/Question.contant';
import { getLocalStorage, setLocalStorage } from '../../common/Config';

let initialState = {
    idcourse: "",
    question: [],

};

const QuestionReducerStore = (state = initialState, action) => {

    switch (action.type) {

        case types.SUBMIT_A_QUESTION:
            let updateState = [...state.question];
            updateState.unshift(action.payload);
            state.question = updateState;
            setLocalStorage(state.idcourse + '-question', state.question);
            return { ...state };

        case types.GET_QUESTION_FROM_STORAGE:
            state.idcourse = action.idcourse;
            state.question = (localStorage.getItem(state.idcourse + '-question')) ? getLocalStorage(state.idcourse + '-question') : [];
            return { ...state };

        default:
            return { ...state };
    }
}
export default QuestionReducerStore;