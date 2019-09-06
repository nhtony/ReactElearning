import React, { PureComponent } from 'react'
import BreadCrumbs from '../../components/course-detail/BreadCrumbs';
import CourseTitle from '../../components/course-detail/CourseTitle';
import CourseMain from '../../components/course-detail/CourseMain';
import CourseAside from '../../components/course-detail/CourseAside';
import RelatedCourses from '../../components/course-detail/RelatedCourses';
import SidebarSignUp from '../../components/home/SidebarSignUp';
import SidebarLogin from '../../components/home/SidebarLogin';
import { connect } from 'react-redux';

class CourseDetail extends PureComponent {
    render() {
        const { maKhoaHoc } = this.props.courseDatail;
        return (
            <section className="course-detail-page">
                <section className="course-detail__header">
                    <BreadCrumbs maKH={maKhoaHoc}></BreadCrumbs>
                    <CourseTitle maKH={maKhoaHoc}></CourseTitle>
                    <SidebarSignUp></SidebarSignUp>
                    <SidebarLogin></SidebarLogin>
                </section>
                <section className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <CourseMain courseDatail={this.props.courseDatail}></CourseMain>
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