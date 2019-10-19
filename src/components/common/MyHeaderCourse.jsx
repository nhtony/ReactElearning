import React, { Component } from 'react'
import { connect } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';
import { css } from '@emotion/core';
import { getLocalStorage, userLogin } from '../../common/Config';
import { getMyCoursestAction } from '../../redux/actions/Course.action';
import { getDetailCourseAction } from '../../redux/actions/Course.action';
const override = css`
margin: 0 auto;
width: 30px;
`;
class MyHeaderCourse extends Component {

    componentDidMount() {
        if (localStorage.getItem(userLogin)) {
            this.props.getMyCourse(getLocalStorage(userLogin).taiKhoan)
        }
    }

    renderMyCourse = () => {
        let myList = this.props.myCourses.map((element) => {
            return this.props.courses.find(item => item.maKhoaHoc === element.maKhoaHoc)
        });
        return myList.map((item, index) => {
            return (
                <li className="header-course" key={index}>
                    <a onClick={() => this.props.getCourseDetail(item.maKhoaHoc)} href={`/home/my/player/${item.maKhoaHoc}`} className="row header-course__item">
                        <img className="col-4" src={item.hinhAnh} alt="" />
                        <div className="info col-8">
                            <h6>{item.tenKhoaHoc}</h6>
                            <p><span className="mr-1">từ</span>{item.nguoiTao.hoTen}</p>
                        </div>
                    </a>
                </li>)
        })

    }

    render() {
        return (this.props.enCourseLoaded && this.props.coursesLoaded) ?
            (this.props.myCourses.length > 0) ? this.renderMyCourse() : <p>Chưa có khóa học nào</p>
            : <PulseLoader css={override}
            ></PulseLoader>
    }
}
const mapStateToProps = (state) => {
    return {
        myCourses: state.CourseReducer.myCourses,
        courses: state.CoursesReducer.Courses,
        coursesLoaded: state.CoursesReducer.coursesLoaded,
        enCourseLoaded: state.CourseReducer.enCourseLoaded
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCourseDetail: (idcourse) => {
            dispatch(getDetailCourseAction(idcourse));
        },
        getMyCourse: (username) => {
            dispatch(getMyCoursestAction(username));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyHeaderCourse);