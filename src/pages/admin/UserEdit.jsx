import React, { Component } from 'react'
import FormUser from '../../components/admin/FormUser';
import { connect } from 'react-redux';
import { getProfileAction } from '../../redux/actions/User.action';
import { Redirect } from 'react-router-dom';
import { getLocalStorage, userLogin } from '../../common/Config';
class UserEdit extends Component {
    componentDidMount() {
        let taiKhoan = "";
        taiKhoan = this.props.match.params.tk;
        this.props.getProfile(taiKhoan,getLocalStorage(userLogin).accessToken);
    }
    render() {
        let form = {
            formTitle: 'Edit Form',
            status: true,
        };
        return (this.props.editSuccess) ? (<Redirect to="/admin/users" />) : (<FormUser form={form}></FormUser>)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (username,token) => {
            dispatch(getProfileAction(username,token));
        }
    }
}
const mapStateToProps = (state) => {
    return {
        editSuccess: state.UsersReducer.isSuccess
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);