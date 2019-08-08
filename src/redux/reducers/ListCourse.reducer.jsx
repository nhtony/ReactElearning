import * as types from '../contants/ListCourse.contant';

let list = {
    Courses: [],
    Categories: [],
    isSuccess: false,
    isNotFound: false,
}

const CoursesReducerStore = (state = list, action) => {
    switch (action.type) {
        case types.GET_LIST_COURSE: {
            state.Courses = action.courses;
            state.isSuccess = false;
            return { ...state };
        }
        case types.ADD_COURSE:
            {
                state.isSuccess = action.status;
                return { ...state };
            }
        case types.EDIT_COURSE:
            {
                state.isSuccess = action.status;
                return { ...state };
            }
        case types.GET_CATEGORIES: {
            state.Categories = action.categories;
            return { ...state };
        }
        case types.FIND_COURSE: {
            if(action.listSearch){
                let updateState = {...state};
                updateState.Courses = action.listSearch;
                updateState.isNotFound = false;
                return updateState;
            }
            else{
                let updateState = {...state,message:action.mess};
                updateState.isNotFound = true;
                return updateState;
            }
        }
        default:
            return { ...state };
    }
}

export default CoursesReducerStore;