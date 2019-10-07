import React, { Component } from 'react'
import CourseItem from '../common/CourseItem'

export default class MyCourseList extends Component {

    renderMyCourses = () => {
        let myList = this.props.myCourses.map((element) => {
            return this.props.courses.find(item => item.maKhoaHoc === element.maKhoaHoc)
        });
        return myList.map((item, index) => {
            return (<div key={index} className="col-3 mb-3"><CourseItem isEnroll={true} courseContent={item}></CourseItem></div>)
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderMyCourses()}
            </div>
        )
    }
}

