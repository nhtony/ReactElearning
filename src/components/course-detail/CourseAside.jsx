import React, { Component } from 'react';
import { connect } from 'react-redux';
import { courseContent } from '../../common/CourseService';
import { getListCourseAction } from '../../redux/actions/Courses.action';

import AuthorCourses from './AuthorCourses';
import SocialList from '../genaral/SocialList';
import CourseFeatureAside from './CourseFeatureAside';

class CourseAside extends Component {

    getCourseByAuthorName = (list, name) => {
        return list.filter(course => course.nguoiTao.hoTen === name);
    }

    componentWillMount() {
        this.props.getListCourse();
    }

    render() {

        const { maKhoaHoc, nguoiTao } = this.props.courseDetail;

        const author = (Object.entries(this.props.courseDetail).length === 0 && this.props.courseDetail.constructor === Object) ? {} : nguoiTao;

        const authorCourse = this.getCourseByAuthorName(this.props.Courses, author.hoTen);
    
        const { duration } = (courseContent.hasOwnProperty(maKhoaHoc)) ? courseContent[maKhoaHoc] : {};

        return (
            <aside className="course-aside sticky">
                <div className="take-it">
                    <h4>FREE</h4>
                    <button>ENROLL</button>
                </div>
                <SocialList></SocialList>
                <div className="author-aside row">
                    <div className="img col-4">
                        <img className="author-img" src="/img/1.jpg" alt="" />
                    </div>
                    <div className="author-info col-8">
                        <h5 className="author__infomation-name">{author.hoTen}</h5>
                        <p className="instructor__infomation">course instructor</p>
                        <button className="btn-follow">FOLLOW</button>
                    </div>
                </div>
                <div className="enrolled-students">
                    <h5>ENROLLED STUDENTS</h5>
                    <div className="student-avatar">
                        <img className="student-img" src="https://secure.gravatar.com/avatar/ab956b5bf060f7df4b4e558807334912?s=60&d=mm&r=g" alt="" />
                        <img className="student-img" src="https://secure.gravatar.com/avatar/c7c731ec2c35133c7779f0c6a4332eba?s=60&d=mm&r=g" alt="" />
                        <img className="student-img" src="../img/avatar.png" alt="" />
                        <img className="student-img" src="https://secure.gravatar.com/avatar/bb90dcb0ceabfc8bf10c550f1ee95ee7?s=60&d=mm&r=g" alt="" />
                        <img className="student-img" src="https://secure.gravatar.com/avatar/bb90dcb0ceabfc8bf10c550f1ee95ee7?s=60&d=mm&r=g" alt="" />
                        <img className="student-img" src="https://secure.gravatar.com/avatar/bb90dcb0ceabfc8bf10c550f1ee95ee7?s=60&d=mm&r=g" alt="" />
                        <img className="student-img" src="https://secure.gravatar.com/avatar/bb90dcb0ceabfc8bf10c550f1ee95ee7?s=60&d=mm&r=g" alt="" />
                    </div>
                </div>
               <CourseFeatureAside duration={duration} authorCourse={authorCourse}></CourseFeatureAside>
                <div className="another-author-course">
                    <h5 className="sidebar-single__title">FROM <span>{author.hoTen}</span></h5>
                    <AuthorCourses maKH={maKhoaHoc} authorCourse={authorCourse}></AuthorCourses>
                </div>
            </aside>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Courses: state.CoursesReducer.Courses,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListCourse: () => {
            dispatch(getListCourseAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseAside);