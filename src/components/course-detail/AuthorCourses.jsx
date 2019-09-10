import React, { Component } from 'react'
import AuthorCourseItem from './AuthorCourseItem'

export default class AuthorCourses extends Component {

    renderAuthorCourseItem = (courses, idcourse) => {
        const list = courses.filter(item => item.maKhoaHoc !== idcourse);
        return list.map((course, index) => {
            return (<AuthorCourseItem key={index} course={course}></AuthorCourseItem>)
        })
    }

    render() {
        return (
            <div className="course-relation">
                {this.renderAuthorCourseItem(this.props.authorCourse, this.props.maKH)}
            </div>
        )
    }
}
