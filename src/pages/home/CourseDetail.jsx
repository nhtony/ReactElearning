import React, { Component } from 'react'
import BreadCrumbs from '../../components/course-detail/BreadCrumbs';
import CourseTitle from '../../components/course-detail/CourseTitle';
import CourseMain from '../../components/course-detail/CourseMain';
import CourseAside from '../../components/course-detail/CourseAside';
import RelatedCourses from '../../components/course-detail/RelatedCourses';
import { connect } from 'react-redux';

class CourseDetail extends Component {

    render() {
        const { maKhoaHoc } = this.props.courseDatail;
        return (
            <section className="course-detail-page">
                <section className="course-detail__header">
                    <BreadCrumbs maKH={maKhoaHoc}></BreadCrumbs>
                    <CourseTitle maKH={maKhoaHoc}></CourseTitle>
                </section>
                <section className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <CourseMain></CourseMain>
                            </div>
                            <div className="col-4">
                                <CourseAside maKH={maKhoaHoc}></CourseAside>
                            </div>
                        </div>
                    </div>
                </section>
                <RelatedCourses></RelatedCourses>
            </section>
        )
    }
}


const mapStateToProps = state => {
    return {
        courseDatail: state.CourseReducer.courseDetail
    }
}
export default connect(mapStateToProps, null)(CourseDetail);