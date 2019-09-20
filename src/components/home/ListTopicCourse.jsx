import React, { Component } from 'react'
import { connect } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
import CourseItem from '../genaral/CourseItem';
let arrCourse = [];
class ListTopicCourse extends Component {

    renderTopicCourse = () => {
        return arrCourse.map((item, index) => {
            return (
                <div className="col-3 mb-3" key={index}>
                    <CourseItem courseContent={item} key={index} />
                </div>
            )
        })
    }

    componentWillMount() {
        arrCourse = this.props.Courses;
    }

    componentWillReceiveProps(nextProps) {
        arrCourse = (nextProps.allcourse) ? nextProps.Courses : nextProps.CateCourses;
    }

    render() {
        return (
            <Zoom bottom cascade>
                <div className="row">
                    {this.renderTopicCourse()}
                </div>
            </Zoom>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Courses: state.CoursesReducer.Courses,
        CateCourses: state.CoursesReducer.CategoryCourses
    }
}
export default connect(mapStateToProps, null)(ListTopicCourse);