import * as types from '../contants/Courses.contant';

let initialState = {
    Courses: [],
    Categories: [],
    Result: null,
    CategoryCourses: [],
    Pagination: {},
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
        case types.FIND_COURSE['SUCCESS']:
            state.Result = {
                ...state.Result,
                courses: action.payload ? action.payload : state.Courses,
                isNotFound: false
            }
            return { ...state, isLoading: false };
        case types.FIND_COURSE['REQUEST']:
            state.Result = {
                ...state.Result,
                courses: [],
                isNotFound: false
            }
            return { ...state, isLoading: true };
        case types.FIND_COURSE['FAILED']:
            state.Result = {
                ...state.Result,
                courses: [],
                message: action.payload,
                isNotFound: true
            }
            return { ...state, isLoading: false };

        //Lấy danh sách khóa học phân trang
        case types.GET_PAGINATION_COURSES['SUCCESS']:
            state.Pagination = action.payload;
            return { ...state, paginationLoaded: true };
        case types.GET_PAGINATION_COURSES['REQUEST']:
            return { ...state, paginationLoaded: false };

        default:
            return { ...state };
    }
}

export default CoursesReducerStore;