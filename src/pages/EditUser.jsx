import React, { Component } from 'react'
import Navbar from '../components/admin/Navbar';
import Sidebar from '../components/admin/Sidebar';
import Form from '../components/admin/Form';
import { connect } from 'react-redux';
import { getProfileAction } from '../redux/actions/User.action';
import {Redirect} from 'react-router-dom';
class EditUser extends Component {
    componentDidMount() {
        let param = {
            TaiKhoan: '',
        }
        param.TaiKhoan = this.props.match.params.tk;
        this.props.getProfile(param);
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
                        <Form form={form}></Form>
                    </section>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (username) => {
            dispatch(getProfileAction(username));
        }
    }
}
const mapStateToProps = (state) => {
    return {
        editSuccess: state.UsersReducerStore.isSuccess
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditUser);