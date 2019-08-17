import React, { Component } from 'react'
import FormUser from '../../components/admin/FormUser';
import { connect } from 'react-redux';
import { getProfileAction } from '../../redux/actions/User.action';
import { Redirect } from 'react-router-dom';
class UserEdit extends Component {
    componentDidMount() {
        let param = {
            TaiKhoan: '',
        }
        param.TaiKhoan = this.props.match.params.tk;
        this.props.getProfile(param);
    }
    render() {
        let form = {
            formTitle: 'Edit Form',
            status: true,
        };
        return (this.props.editSuccess) ? (<Redirect to="/admin/users" />) :(<FormUser form={form}></FormUser>)
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
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);