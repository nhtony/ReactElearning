import React, { Component } from 'react';
import { connect } from 'react-redux';
import { courseContent } from '../../common/CourseService';
import { getListCourseAction } from '../../redux/actions/Courses.action';
import { userEnrollAction } from '../../redux/actions/User.action';
import { getLocalStorage, userLogin } from '../../common/Config';
import AuthorCourses from './AuthorCourses';
import SocialList from '../common/SocialList';
import CourseFeatureAside from './CourseFeatureAside';
import BeatLoader from 'react-spinners/BeatLoader';
import { sidebarAction } from '../../redux/actions/RightSidebar.action';
import { Link } from 'react-router-dom';

const loginSidebar = {
    isOpenLogin: true,
    isOpenSignUp: false,
}
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

        const enrollObj = {
            maKhoaHoc: maKhoaHoc,
            taiKhoan: (this.props.isLogin) ? getLocalStorage(userLogin).taiKhoan : ""
        }

        return (
            <aside className="course-aside sticky">
                <div className="take-it">
                    <h4>FREE</h4>
                    <button onClick={() => (this.props.isLogin) ? this.props.enrollCourse(enrollObj) : this.props.openLoginSidebar(loginSidebar)}>ĐĂNG KÝ</button>
                </div>
                <SocialList></SocialList>
                <div className="author-aside row">
                    <div className="img col-4">
                        <img className="author-img" src="/img/1.jpg" alt="" />
                    </div>
                    <div className="author-info col-8">
                        <h5 className="author__infomation-name">{author.hoTen}</h5>
                        <p className="instructor__infomation">giảng viên</p>
                        <button className="btn-follow">THEO DÕI</button>
                    </div>
                </div>
                <div className="enrolled-students">
                    <h5>HỌC VIÊN ĐÃ ĐĂNG KÝ</h5>
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
                    <h5 className="sidebar-single__title">Khóa học khác của <Link to={`/home/author/profile/${nguoiTao.hoTen}`}><span>{author.hoTen}</span></Link></h5>
                    {(this.props.coursesLoaded) ? <AuthorCourses maKH={maKhoaHoc} authorCourse={authorCourse}></AuthorCourses> : <BeatLoader></BeatLoader>}
                </div>
            </aside>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Courses: state.CoursesReducer.Courses,
        coursesLoaded: state.CoursesReducer.coursesLoaded,
        isLogin: state.UserReducer.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListCourse: () => {
            dispatch(getListCourseAction())
        },
        enrollCourse: (data) => {
            dispatch(userEnrollAction(data))
        },
        openLoginSidebar: (data) => {
            dispatch(sidebarAction(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseAside);