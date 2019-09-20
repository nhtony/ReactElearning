import React, { Component } from 'react'
import BreadCrumbs from '../../components/course-detail/BreadCrumbs';
import CourseTitle from '../../components/course-detail/CourseTitle';
import CourseMain from '../../components/course-detail/CourseMain';
import CourseAside from '../../components/course-detail/CourseAside';
import RelatedCourses from '../../components/course-detail/RelatedCourses';
import { connect } from 'react-redux';
import LoadingService from '../../common/LoadingService';
import { getDetailCourseAction } from '../../redux/actions/Course.action';
class CourseDetail extends Component {

   

    componentWillMount() {
        this.props.getDetailCourse(this.props.match.params.mkh);
    }

    render() {
      
        return (this.props.detailLoaded) ? (<section className="course-detail-page">
            <section className="course-detail__header">
                <BreadCrumbs courseDetail={this.props.courseDetail}></BreadCrumbs>
                <CourseTitle courseDetail={this.props.courseDetail}></CourseTitle>
            </section>
            <section className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <CourseMain courseDetail={this.props.courseDetail}></CourseMain>
                        </div>
                        <div className="col-4">
                            <CourseAside courseDetail={this.props.courseDetail}></CourseAside>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedCourses courseDetail={this.props.courseDetail}></RelatedCourses>
        </section>) : <LoadingService></LoadingService>
    }
}

const mapStateToProps = (state) => {
    return {
        courseDetail: state.CourseReducer.courseDetail,
        detailLoaded: state.CourseReducer.detailLoaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailCourse: (idcourse) => {
            return (dispatch(getDetailCourseAction(idcourse)))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);