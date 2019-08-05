import React, { Component } from 'react'
import Navbar from '../components/admin/Navbar';
import Sidebar from '../components/admin/Sidebar';
import Form from '../components/admin/Form';
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
                        <Form form={form}></Form>
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