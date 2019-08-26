import React, { Component } from 'react'
import BreadCrumbs from '../../components/course-detail/BreadCrumbs';
import CourseTitle from '../../components/course-detail/CourseTitle';

export default class CourseDetail extends Component {
    render() {
        return (
            <section className="course-detail-page">
                <BreadCrumbs></BreadCrumbs>
                <CourseTitle></CourseTitle>
            </section>
        )
    }
}
