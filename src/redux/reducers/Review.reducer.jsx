import * as types from '../contants/Review.contant';
import { getLocalStorage, setLocalStorage } from '../../common/Config';

let initialState = {
    idcourse: "",
    comments: [],

};

const ReviewReducerStore = (state = initialState, action) => {

    switch (action.type) {

        case types.SUBMIT_A_COMMENT:

            let updateState = [...state.comments];

            updateState.unshift(action.payload);

            state.comments = updateState;

            setLocalStorage(state.idcourse, state.comments);

            return { ...state };

        case types.GET_COURSE_FROM_STORAGE:

            state.idcourse = action.idcourse;

            state.comments = (localStorage.getItem(state.idcourse)) ? getLocalStorage(state.idcourse) : [];

            return { ...state };


        default:
            return { ...state };
    }
}
export default ReviewReducerStore;