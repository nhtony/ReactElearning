import * as types from '../contants/ListCourse.contant';

let Courses = [];

const CoursesReducerStore = (state = Courses, action) => {
    switch (action.type) {
        case types.GET_LIST_COURSE:
            let updateState = [...action.courses];
            return updateState;
        default:
            return [...state];
    }
}

export default CoursesReducerStore;