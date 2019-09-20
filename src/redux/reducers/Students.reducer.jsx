import * as types from '../contants/Students.contant';

let initialState = {
    list: [],
    notify: false,
    notiContent: {},
};

const StudentsReducerStore = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_STUDENTS:
            state.list = action.payload;
            return { ...state }
        case types.GET_UNRESGISTERED_USER:
            state.list = action.payload;
            return { ...state }
        case types.GET_WATTING_USER:
            state.list = action.payload;
            return { ...state }
        case types.ENROLL:
            state.list = state.list.filter(item => item.taiKhoan !== action.payload);
            return { ...state };
        case types.DISENROLL:
            state.list = state.list.filter(item => item.taiKhoan !== action.payload);
            return { ...state };
        case types.SET_NOTIFY:
            state.notiContent = action.payload;
            state.notify = true;
            return { ...state };
        default:
            return state;
    }
}

export default StudentsReducerStore;