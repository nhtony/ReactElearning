import React, { PureComponent } from 'react'
import CourseItem from '../common/CourseItem'
export default class MainCate extends PureComponent {

    renderCourseItem = () => {
        return this.props.CateCourses.map((item, index) => {
            return (<div key={index} className="col-md-4">
                <CourseItem history={this.props.history} courseContent={item}></CourseItem>
            </div>)
        })
    }

    render() {
        return (
            <section className="main-cate-courses">
                <div className="row">
                    {this.renderCourseItem()}
                </div>
            </section>
        )
    }
}


