import * as types from '../contants/Students.contant';

let studentState = {
    list: [],
};

const StudentsReducerStore = (state = studentState, action) => {
    switch (action.type) {
        case types.GET_STUDENTS:
            state.list = action.students;
            return { ...state }
        case types.GET_UNRESGISTERED_USER:
            state.list = action.notstudents;
            return { ...state }
        case types.GET_APPROVING_USER:
            state.list = action.waittinguser;
            return { ...state }
        default:
            return { ...state }
    }
}
export default StudentsReducerStore;