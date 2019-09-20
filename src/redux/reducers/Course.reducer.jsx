import * as types from '../contants/Course.contant';

let initialState = {
    list: [],
    appcourses: [],
    myCourses: [],
    courseDetail: {},
};

const CourseReducerStore = (state = initialState, action) => {
    switch (action.type) {
        // Lay chi tiet khoa hoc
        case types.GET_DETAIL_COURSE['SUCCESS']:
            state.courseDetail = action.payload;
            return { ...state, detailLoaded: true };
        case types.GET_DETAIL_COURSE['REQUEST']:
            return { ...state, detailLoaded: false }
        case types.GET_DETAIL_COURSE['FAILED']:
            return { ...state, detailLoaded: true }
        //Lay khoa hoc da xet duyet
        case types.GET_ENROLL_COURSES['SUCCESS']:
            state.list = action.payload;
            state.myCourses = action.payload;
            return { ...state, enCourseLoaded: true }
        case types.GET_ENROLL_COURSES['REQUEST']:
            return { ...state, enCourseLoaded: false }
        case types.GET_ENROLL_COURSES['FAILED']:
            return { ...state, enCourseLoaded: true }
        //Lay khoa hoc cho xet duyet
        case types.GET_WAITING_ENROLL_COURSES['SUCCESS']:
            state.list = action.payload;
            state.appcourses = action.payload
            return { ...state, appCourseLoaded: true }
        case types.GET_WAITING_ENROLL_COURSES['REQUEST']:
            return { ...state, appCourseLoaded: false }
        case types.GET_WAITING_ENROLL_COURSES['FAILED']:
            return { ...state, appCourseLoaded: true }
        //Lay khoa hoc chua xet duyet
        case types.GET_NOT_ENROLL_COURSES:
            state.list = action.payload;
            return { ...state }
        //Ghi danh khóa học
        case types.ENROLL:
            state.list = state.list.filter(item => item.maKhoaHoc !== action.payload);
            return { ...state };
        //Hủy ghi danh
        case types.DISENROLL:
            state.list = state.list.filter(item => item.maKhoaHoc !== action.payload);
            return { ...state };
        default:
            return { ...state };
    }
}
export default CourseReducerStore;