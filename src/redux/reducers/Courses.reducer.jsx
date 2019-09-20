import * as types from '../contants/Courses.contant';

let initialState = {
    Courses: [],
    Categories: [],
    CategoryCourses: [],
    isSuccess: false,
    isNotFound: false
}

const CoursesReducerStore = (state = initialState, action) => {
    switch (action.type) {
        // Lấy danh sách khóa học
        case types.GET_COURSES['SUCCESS']:
            state.Courses = action.payload;
            state.isSuccess = false;
            return { ...state, coursesLoaded: true };
        case types.GET_COURSES['REQUEST']:
            return { ...state, coursesLoaded: false };
        case types.GET_COURSES['FAILED']:
            return { ...state, coursesLoaded: true };
        // Thêm khóa học
        case types.ADD_COURSE['SUCCESS']:
            state.isSuccess = (typeof action.payload === Object) ? true : false;
            return { ...state, addLoading: false };
        case types.ADD_COURSE['REQUEST']:
            return { ...state, addLoading: true };
        case types.ADD_COURSE['FAILED']:
            return { ...state, addLoading: false };
        // Sửa khóa học
        case types.EDIT_COURSE['SUCCESS']:
            state.isSuccess = (typeof action.payload === Object) ? true : false;
            return { ...state, editLoading: false };
        case types.EDIT_COURSE['REQUEST']:
            return { ...state, editLoading: true };
        case types.EDIT_COURSE['FAILED']:
            return { ...state, editLoading: false };
        // Xóa khóa học
        case types.DELETE_COURSE['SUCCESS']:
            state.Courses = state.Courses.filter(course => course.maKhoaHoc !== action.payload);
            return { ...state, deleteLoading: false };
        case types.DELETE_COURSE['REQUEST']:
            return { ...state, deleteLoading: true };
        case types.DELETE_COURSE['FAILED']:
            return { ...state, deleteLoading: false };
        // Lấy danh mục khóa học
        case types.GET_CATEGORIES['SUCCESS']:
            state.Categories = action.payload;
            return { ...state, cateLoading: false };
        case types.GET_CATEGORIES['REQUEST']:
            return { ...state, cateLoading: true };
        case types.GET_CATEGORIES['FAILED']:
            return { ...state, cateLoading: false };
        //Lấy khóa học theo danh mục
        case types.GET_CATEGORY_COURSES['SUCCESS']:
            state.CategoryCourses = action.payload;
            return { ...state, catCoursesLoaded: true };
        case types.GET_CATEGORY_COURSES['REQUEST']:
            return { ...state, catCoursesLoaded: false };
        case types.GET_CATEGORY_COURSES['FAILED']:
            return { ...state, catCoursesLoaded: true };
        //Tìm kiếm khóa học theo tên
        case types.FIND_COURSE:
            if (action.listSearch) {
                let updateState = { ...state };
                updateState.Courses = action.listSearch;
                updateState.isNotFound = false;
                return updateState;
            }
            else {
                let updateState = { ...state, message: action.mess };
                updateState.isNotFound = true;
                return updateState;
            }
        default:
            return { ...state};
    }
}

export default CoursesReducerStore;