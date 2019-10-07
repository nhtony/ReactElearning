import React, { Component } from 'react'
import BannerCate from '../../components/common/BannerCate'
import AsideCate from '../../components/course-category/AsideCate'
import MainCate from '../../components/course-category/MainCate'
import { connect } from 'react-redux';
import LoadingService from '../../common/LoadingService';
import { getCateCourseAction } from '../../redux/actions/Courses.action';

class CourseCategory extends Component {

    componentDidMount() {
        const { mdm } = this.props.match.params
        this.props.getCateCourses(mdm);
    }

    render() {
        const title = "KHÓA HỌC THEO DANH MỤC";
        return (this.props.catCoursesLoaded) ? (
            <section className="course-category-page">
                <BannerCate title={title} name={this.props.match.params.name}></BannerCate>
                <section className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <AsideCate></AsideCate>
                            </div>
                            <div className="col-9">
                                <MainCate CateCourses={this.props.CateCourses}></MainCate>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        ) : <LoadingService></LoadingService>
    }
}
const mapStateToProps = (state) => {
    return {
        CateCourses: state.CoursesReducer.CategoryCourses,
        catCoursesLoaded: state.CoursesReducer.catCoursesLoaded
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCateCourses: (cateID) => {
            dispatch(getCateCourseAction(cateID))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseCategory)
