import React, { Component } from 'react'
import BannerCate from '../../components/common/BannerCate'
import MyCourseList from '../../components/my-courses/MyCourseList';
import { connect } from 'react-redux';
import { getMyCoursestAction } from '../../redux/actions/Course.action';
import { getListCourseAction } from '../../redux/actions/Courses.action';
import LoadingService from '../../common/LoadingService';
class MyCourses extends Component {

    componentDidMount() {
        this.props.getMyCourse(this.props.match.params.tk);
        this.props.getListCourses();
    }

    render() {
        const title = "KHÓA HỌC CỦA TÔI";
        return (this.props.enCourseLoaded && this.props.coursesLoaded) ? (
            <section className="my-courses-page">
                <BannerCate title={title}></BannerCate>
                <div className="container">
                    <MyCourseList courses={this.props.courses} myCourses={this.props.myCourses}></MyCourseList>
                </div>
            </section>
        ) : <LoadingService></LoadingService>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMyCourse: (username) => {
            dispatch(getMyCoursestAction(username));
        },
        getListCourses: () => {
            dispatch(getListCourseAction());
        }
    }
}

const mapStateToProps = (state) => {
    return {
        myCourses: state.CourseReducer.myCourses,
        courses: state.CoursesReducer.Courses,
        coursesLoaded: state.CoursesReducer.coursesLoaded,
        enCourseLoaded: state.CourseReducer.enCourseLoaded
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCourses)