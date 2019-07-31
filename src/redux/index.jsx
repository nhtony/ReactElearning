import { combineReducers } from 'redux';
import CoursesReducerStore from './reducers/ListCourse.reducer';
import UsersReducerStore from './reducers/ListUser.reducer';
import UserReducerStore from './reducers/User.reducer';
//store tổng
const rootReducer = combineReducers({
    // store con (theo nghiệp vụ)
    CoursesReducerStore,
    UsersReducerStore,
    UserReducerStore,
})

export default rootReducer;