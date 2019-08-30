import React, { Component } from 'react';
import { connect } from 'react-redux';
import { courseContent } from '../../common/CourseService';
import { getListCourseAction } from '../../redux/actions/Courses.action';
import RelatedCourseItem from './RelatedCourseItem';


class CourseAside extends Component {

    relatedCourses = [];

    getCourseByAuthorName = (list, name) => {
        return list.filter(course => course.nguoiTao.hoTen === name);
    }

    getRelatedCourses = (list, id) => {
        return list.filter(course => course.maKhoaHoc !== id)
    }

    componentDidMount() {
        this.props.getListCourse();
    }

    renderRelatedCourseItem = () => {
        return this.relatedCourses.map((course, index) => {
            return (<RelatedCourseItem  course={course} key={index}></RelatedCourseItem>)
        })
    }

    render() {

        let author = (Object.entries(this.props.courseDetail).length === 0 && this.props.courseDetail.constructor === Object) ? {} : this.props.courseDetail.nguoiTao;

        const authorCourse = this.getCourseByAuthorName(this.props.Courses, author.hoTen);

        this.relatedCourses = this.getRelatedCourses(authorCourse, this.props.courseDetail.maKhoaHoc);

        const { duration } = courseContent[this.props.maKH];
        
        return (
            <aside className="course-aside sticky">
                <div className="take-it">
                    <h4>FREE</h4>
                    <button>ENROLL</button>
                </div>
                <ul className="social-author">
                    <li><i className="fa fa-facebook"></i></li>
                    <li><i className="fa fa-twitter"></i></li>
                    <li><i className="fa fa-instagram"></i></li>
                    <li><i className="fa fa-google-plus"></i></li>
                </ul>
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
                <div className="course-features">
                    <h5 className="mb-4">COURSE FEATURES</h5>
                    <div className="row mb-3">
                        <div className="icon col-2">
                            <i className="fa fa-file-text mr-5"></i>
                        </div>
                        <div className="col-6">
                            <span className="social-text">Lectures</span>
                        </div>
                        <div className="col-4">
                            <span>{this.relatedCourses.length + 1}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="icon col-2">
                            <i className="fa fa-clock-o mr-5"></i>
                        </div>
                        <div className="col-6">
                            <span className="social-text">Duration</span>
                        </div>
                        <div className="col-4">
                            <span>{duration}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="icon col-2">
                            <i className="fa fa-level-up mr-5"></i>

                        </div>
                        <div className="col-6">
                            <span className="social-text">Skill Level</span>
                        </div>
                        <div className="col-4">
                            <span> Beginner</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="icon col-2">
                            <i className="fa fa-globe mr-5"></i>
                        </div>
                        <div className="col-6">
                            <span className="social-text">Language</span>
                        </div>
                        <div className="col-4">
                            <span>English</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="icon col-2">
                            <i className="fa fa-shield mr-5"></i>
                        </div>
                        <div className="col-6">
                            <span className="social-text">Certificate</span>
                        </div>
                        <div className="col-4">
                            No
                        </div>
                    </div>
                </div>
                <div className="another-author-course">
                    <h5 className="sidebar-single__title">FROM <span>{author.hoTen}</span></h5>
                    <div className="course-relation">
                        {this.renderRelatedCourseItem()}
                    </div>
                </div>
            </aside>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courseDetail: state.CourseReducer.courseDetail,
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