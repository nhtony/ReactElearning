import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetailCourseAction } from '../../redux/actions/Course.action';
class AuthorCourseItem extends Component {
    render() {
        const { tenKhoaHoc, hinhAnh, maKhoaHoc } = this.props.course;
        return (
            <div className="course-relation-item">
                <Link onClick={() => this.props.getInfoCourse(maKhoaHoc)} to={"/home/course/detail/" + maKhoaHoc}>
                    <img src={hinhAnh} alt="" />
                </Link>
                <div className="course-name-item">
                    <Link onClick={() => this.props.getInfoCourse(maKhoaHoc)} to={"/home/course/detail/" + maKhoaHoc}>{tenKhoaHoc}</Link>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getInfoCourse: (idcourse) => {
            dispatch(getDetailCourseAction(idcourse));
        }
    }
}

export default connect(null, mapDispatchToProps)(AuthorCourseItem);