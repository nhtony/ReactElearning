import React, { Component } from 'react'
import FormCourse from '../../components/admin/FormCourse';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getInfoCourseAction } from '../../redux/actions/Course.action';
class CourseEdit extends Component {
    componentDidMount() {
        let param = {
            maKhoaHoc: '',
        }
        param.maKhoaHoc = this.props.match.params.mkh;
        this.props.getInfoCourse(param.maKhoaHoc);
    }
    render() {
        let form = {
            formTitle: 'Edit Form',
            status: true,
        };
        return (this.props.editSuccess) ? (<Redirect to="/admin/courses" />) : (<FormCourse form={form}></FormCourse>)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getInfoCourse: (idcourse) => {
            dispatch(getInfoCourseAction(idcourse));
        }
    }
}
const mapStateToProps = (state) => {
    return {
        editSuccess: state.CoursesReducerStore.isSuccess
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseEdit);