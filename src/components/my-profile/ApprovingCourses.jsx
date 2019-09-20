import React, { Component } from 'react'
import CourseItem from '../genaral/CourseItem'
export default class ApprovingCourses extends Component {
    renderApprovingCourse = () => {
        let myList = this.props.appCourses.map((element) => {
            return this.props.courses.find(item => item.maKhoaHoc === element.maKhoaHoc)
        });
        return myList.map((item, index) => {
            return (<div key={index} className="col-4 mb-4"><CourseItem approving={true} courseContent={item}></CourseItem></div>)
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderApprovingCourse()}
            </div>
        )
    }
}
