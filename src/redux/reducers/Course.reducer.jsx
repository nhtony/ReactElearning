import * as types from '../contants/Course.contant';

let Course = {

};
const CourseReducerStore = (state = Course, action) => {
    switch (action.type) {
        case types.GET_INFO_COURSE: {
            let updateState = { ...action.courseDetail };
            return updateState;
        }
        case types.ENROLL: {
            return { ...state };
        }
        case types.DISENROLL: {
            return { ...state };
        }
        default:
            return state;
    }
}
export default CourseReducerStore;