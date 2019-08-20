import React, { Component } from 'react'
import FormUser from '../../components/admin/FormUser';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class UserAdd extends Component {
    render() {
        let form = {
            formTitle: 'Add Form',
            status: false,
        };
        return (this.props.addSuccess) ? (<Redirect to="/admin/users" />) : (<FormUser form={form}></FormUser>)
    }
}
const mapStateToProps = (state) => {
    return {
        addSuccess: state.UsersReducer.isSuccess
    }
}
export default connect(mapStateToProps, null)(UserAdd)