import React, { Component } from 'react'
import TableStudent from '../../components/admin/TableStudent';
import { connect } from 'react-redux';
import { getDetailCourseAction } from '../../redux/actions/Course.action';
import { getListAction } from '../../redux/actions/Students.action';
import { listTypes } from '../../common/Config';
class Students extends Component {
    componentDidMount() {
        let maKhoaHoc = ""
        maKhoaHoc = this.props.match.params.mkh;
        this.props.getStudents(maKhoaHoc, listTypes.student.isstudent);
        this.props.getInfoCourse(maKhoaHoc);
    }
    render() {
        return (<TableStudent courseDetail={this.props.courseDetail} Students={this.props.Students}></TableStudent>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: (idcourse, listType) => {
            dispatch(getListAction(idcourse, listType));
        },
        getInfoCourse: (idcourse) => {
            dispatch(getDetailCourseAction(idcourse));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        Students: state.StudentsReducer.list,
        courseDetail: state.CourseReducer.courseDetail
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);