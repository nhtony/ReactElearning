import React, { Component } from 'react'
import CourseItem from '../common/CourseItem';
export default class ListAuthorCourse extends Component {

    renderAuthorCourseItem = () => {
        const list = this.props.Courses.filter(item => item.nguoiTao.hoTen === this.props.name)
        return list.map((item, index) => {
            return (
                <div key={index} className="col-3">
                    <CourseItem courseContent={item} />
                </div>
            )
        })
    }

    render() {

        return (
            <div className="feature-author-courses">
                <h2 className="mb-5 text-center">TẤT CẢ KHÓA HỌC</h2>
                <div className="row">
                    {this.renderAuthorCourseItem()}
                </div>
            </div>
        )
    }
}


