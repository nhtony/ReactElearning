import React, {  PureComponent } from 'react'
import CourseItem from './CourseItem';

export default class RelatedCourses extends PureComponent {
    render() {
        return (
            <section className="related-courses">
                <h3 className="text-center">RELATED COURSES</h3>
                <div className="related-list row">
                    <CourseItem></CourseItem>
                    <CourseItem></CourseItem>
                    <CourseItem></CourseItem>
                    <CourseItem></CourseItem>
                </div>
            </section>
        )
    }
}
