import * as types from '../contants/Course.contant';

let initialState = {
    list: [],
    courseDetail: {},
};

const CourseReducerStore = (state = initialState, action) => {
    switch (action.type) {
        // Lay chi tiet khoa hoc
        case types.GET_DETAIL_COURSE['SUCCESS']:
            state.courseDetail = action.payload;
            return { ...state, detailLoading: false };
        case types.GET_DETAIL_COURSE['REQUEST']:
            return { ...state, detailLoading: true }
        case types.GET_DETAIL_COURSE['FAILED']:
            return { ...state, detailLoading: false }

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
            return { ...state };
    }
}
export default CourseReducerStore;