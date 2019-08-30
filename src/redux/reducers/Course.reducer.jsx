import * as types from '../contants/Course.contant';

let initialState = {
    list: [],
    courseDetail: {},
};

const CourseReducerStore = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_INFO_COURSE:
            state.courseDetail = action.courseDetail;
            return { ...state };
        case types.GET_ENROLL_COURSES:
            state.list = action.payload;
            return { ...state }
        case types.GET_NOT_ENROLL_COURSES:
            state.list = action.payload;
            return { ...state }
        case types.GET_WAITING_ENROLL_COURSES:
            state.list = action.payload;
            return { ...state }
        case types.ENROLL:
            state.list = state.list.filter(item => item.maKhoaHoc !== action.payload);
            return { ...state };
        case types.DISENROLL:
            state.list = state.list.filter(item => item.maKhoaHoc !== action.payload);
            return { ...state };
        default:
            return {...state};
    }
}
export default CourseReducerStore;