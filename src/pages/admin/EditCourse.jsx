import React, { Component } from 'react'
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import FormCourse from '../../components/admin/FormCourse';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { getInfoCourseAction } from '../../redux/actions/Course.action';
class EditCourse extends Component {
    componentDidMount() {
        let param = {
            maKhoaHoc: '',
        }
        param.maKhoaHoc = this.props.match.params.mkh;
        this.props.getInfoCourse(param.maKhoaHoc);
    }
    render() {
        let form = {
            formTitle :'Edit Form',
            status: true,
        };
        if(this.props.editSuccess){
            return (<Redirect to="/admin" />)
        }
        return (
            <div className="d-flex justify-content-between">
                <Sidebar></Sidebar>
                <div id="admin-wrapper">
                    <Navbar></Navbar>
                    <section id="admin-content" className="p-3">
                        <FormCourse form={form}></FormCourse>
                    </section>
                </div>
            </div>
        )
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
        editSuccess: state.CourseReducerStore.isSuccess
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);