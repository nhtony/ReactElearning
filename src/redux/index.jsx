import { combineReducers } from 'redux';
import CoursesReducerStore from './reducers/Courses.reducer';
import UsersReducerStore from './reducers/Users.reducer';
import UserReducerStore from './reducers/User.reducer';
import RighSideBarStore from './reducers/RightSidbar.reducer';
import CourseReducerStore from './reducers/Course.reducer';
import StudentsReducerStore from './reducers/Students.reducer';
import AdminReducerStore from './reducers/Admin.reducer';

const rootReducer = combineReducers({
    CoursesReducer: CoursesReducerStore,
    CourseReducer: CourseReducerStore,
    UsersReducer: UsersReducerStore,
    UserReducer: UserReducerStore,
    RightSideBarReducer: RighSideBarStore,
    StudentsReducer: StudentsReducerStore,
    AdminReducer: AdminReducerStore
})

export default rootReducer;