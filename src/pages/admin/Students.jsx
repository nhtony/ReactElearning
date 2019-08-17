import React, { Component } from 'react'
import TableStudent from '../../components/admin/TableStudent';
import { connect } from 'react-redux';
import { getInfoCourseAction } from '../../redux/actions/Course.action';
import { getListAction } from '../../redux/actions/Students.action';
import { listTypes } from '../../common/Config';
class Students extends Component {
    componentDidMount() {
        let param = {
            maKhoaHoc: '',
        }
        param.maKhoaHoc = this.props.match.params.mkh;
        this.props.getStudents(param.maKhoaHoc,listTypes.student);
        this.props.getInfoCourse(param.maKhoaHoc);
    }
    render() {
        return (<TableStudent></TableStudent>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: (idcourse, students) => {
            dispatch(getListAction(idcourse, students));
        },
        getInfoCourse: (idcourse) => {
            dispatch(getInfoCourseAction(idcourse));
        }
    }
}

export default connect(null, mapDispatchToProps)(Students);