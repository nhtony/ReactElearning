import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAprrovingAction } from '../../redux/actions/Course.action';
import LoadingService from '../../common/LoadingService';
import { getListCourseAction } from '../../redux/actions/Courses.action';
import ApprovingCourses from './ApprovingCourses';
class Notification extends Component {

    componentDidMount() {
        this.props.getAppCourse(this.props.match.params.tk);
        this.props.getListCourses();
    }


    render() {
        return (this.props.appCourseLoaded && this.props.coursesLoaded) ? (
            <div className="notifiaction">
                <ApprovingCourses courses={this.props.courses} appCourses={this.props.appCourses}></ApprovingCourses>
            </div>
        ) : <LoadingService></LoadingService>
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAppCourse: (username) => {
            dispatch(getAprrovingAction(username));
        },
        getListCourses: () => {
            dispatch(getListCourseAction());
        }
    }
}

const mapStateToProps = (state) => {
    return {
        appCourses: state.CourseReducer.appcourses,
        appCourseLoaded: state.CourseReducer.appCourseLoaded,
        courses: state.CoursesReducer.Courses,
        coursesLoaded: state.CoursesReducer.coursesLoaded
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)