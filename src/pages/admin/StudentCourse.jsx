import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getListAction } from '../../redux/actions/Course.action';
import { getProfileAction } from '../../redux/actions/User.action';
import { listTypes } from '../../common/Config';
import TableStudentCourse from '../../components/admin/TableStudentCourse'
class StudentCourse extends Component {
    
    componentDidMount() {
        let taiKhoan = ""
        taiKhoan = this.props.match.params.tk;
        this.props.getCourseStudent(taiKhoan, listTypes.course.isenroll);
        this.props.getProfile(taiKhoan);
    }

    render() {
        return (
            <TableStudentCourse StudentsCourse={this.props.StudentsCourse} profile={this.props.profile}></TableStudentCourse>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCourseStudent: (username, listType) => {
            dispatch(getListAction(username, listType));
        },
        getProfile: (username) => {
            dispatch(getProfileAction(username));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        StudentsCourse: state.CourseReducer.list,
     
        profile: state.UserReducer.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentCourse);