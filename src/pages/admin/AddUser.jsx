import React, { Component } from 'react'
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import FormUser from '../../components/admin/FormUser';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
 class AddUser extends Component {
    render() {
        let form = {
            formTitle :'Add Form',
            status: false,
        };
        if(this.props.addSuccess){
            return (<Redirect to="/admin" />)
        }
        return (
            <div className="d-flex justify-content-between">
                <Sidebar></Sidebar>
                <div id="admin-wrapper">
                    <Navbar></Navbar>
                    <section id="admin-content" className="p-3">
                        <FormUser form={form}></FormUser>
                    </section>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        addSuccess: state.UsersReducerStore.isSuccess
    }
}
export default connect(mapStateToProps,null)(AddUser)