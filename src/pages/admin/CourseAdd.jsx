import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormCourse from '../../components/admin/FormCourse';
class CourseAdd extends Component {
    render() {
        let form = {
            formTitle: 'Add Form',
            status: false,
        };
        return (this.props.addSuccess) ? (<Redirect to="/admin/courses" />) : (<FormCourse form={form} ></FormCourse>);
    }
}
const mapStateToProps = (state) => {
    return {
        addSuccess: state.CoursesReducer.isSuccess
    }
}
export default connect(mapStateToProps, null)(CourseAdd)