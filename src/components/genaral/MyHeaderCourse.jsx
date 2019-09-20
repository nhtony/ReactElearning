import React, { Component } from 'react'
import { connect } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import { getLocalStorage, loginInfo } from '../../common/Config';
import { getMyCoursestAction } from '../../redux/actions/Course.action';
import { getDetailCourseAction } from '../../redux/actions/Course.action';
const override = css`
margin: 0 auto;
width: 30px;
`;
class MyHeaderCourse extends Component {

    componentDidMount() {
        this.props.getMyCourse(getLocalStorage(loginInfo).taiKhoan);
    }

    renderMyCourse = () => {
        let myList = this.props.myCourses.map((element) => {
            return this.props.courses.find(item => item.maKhoaHoc === element.maKhoaHoc)
        });
        return myList.slice(0, 4).map((item, index) => {
            return (
                <li className="header-course" key={index}>
                    <Link onClick={() => this.props.getInfoCourse(item.maKhoaHoc)} to={`/home/my/player/${item.maKhoaHoc}`} className="row header-course__item">
                        <img className="col-4" src={item.hinhAnh} alt="" />
                        <div className="info col-8">
                            <h6>{item.tenKhoaHoc}</h6>
                            <p><span className="mr-1">By</span>{item.nguoiTao.hoTen}</p>
                        </div>
                    </Link>
                </li>)
        })
    }

    render() {
        return (this.props.enCourseLoaded && this.props.coursesLoaded) ?
            this.renderMyCourse()
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
        getInfoCourse: (idcourse) => {
            dispatch(getDetailCourseAction(idcourse));
        },
        getMyCourse: (username) => {
            dispatch(getMyCoursestAction(username));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyHeaderCourse);