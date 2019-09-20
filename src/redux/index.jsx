import { combineReducers } from 'redux';
import CoursesReducerStore from './reducers/Courses.reducer';
import UsersReducerStore from './reducers/Users.reducer';
import UserReducerStore from './reducers/User.reducer';
import RighSideBarStore from './reducers/RightSidbar.reducer';
import CourseReducerStore from './reducers/Course.reducer';
import StudentsReducerStore from './reducers/Students.reducer';
import AdminReducerStore from './reducers/Admin.reducer';
import ReviewReducerStore from './reducers/Review.reducer';
import QuestionReducerStore from './reducers/Question.reducer';


const rootReducer = combineReducers({
    CoursesReducer: CoursesReducerStore,
    CourseReducer: CourseReducerStore,
    UsersReducer: UsersReducerStore,
    UserReducer: UserReducerStore,
    RightSideBarReducer: RighSideBarStore,
    StudentsReducer: StudentsReducerStore,
    AdminReducer: AdminReducerStore,
    ReviewReducer: ReviewReducerStore,
    QuestionReducer: QuestionReducerStore
    
})

export default rootReducer;