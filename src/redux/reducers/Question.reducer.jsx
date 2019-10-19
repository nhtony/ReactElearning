import * as types from '../contants/Question.contant';
import { setLocalStorage, getLocalStorage } from '../../common/Config';


let initialState = {
    idcourse: "",
    questions: getLocalStorage('questions')
};


const QuestionReducerStore = (state = initialState, action) => {
    const arr = [];
    switch (action.type) {
        case types.SUBMIT_A_QUESTION: 
            let updateState = { ...state.questions };
            if (updateState.hasOwnProperty(state.idcourse)) {
                let mang = [...updateState[state.idcourse], action.payload];
                updateState[state.idcourse] = mang.reverse();
            }
            else {
                arr.push(action.payload);
                updateState[state.idcourse] = arr;
            }
            state.questions = updateState;
            setLocalStorage('questions', state.questions);
            return { ...state };
        

        case types.GET_QUESTION_FROM_STORAGE:
            state.idcourse = action.idcourse;
            state.question = localStorage.getItem('questions') ? localStorage.getItem('questions') : [];
            return { ...state };

        case types.SUBMIT_A_ANSWER:
            let updateQuestions = { ...state.questions };
            let newArr = [...updateQuestions[state.idcourse]];
            let newQuestion = newArr.find(item => item.qtitle === action.payload.atitle)
            newQuestion.answers.unshift(action.payload);
            state.questions = updateQuestions;
            setLocalStorage('questions', state.questions);
            return { ...state };

        default:
            return { ...state };
    }
}
export default QuestionReducerStore;