import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { loginAction, signUpAction } from '../../redux/actions/User.action';
import { GP } from '../../common/Config';
class Google extends Component {

    render() {
        if (this.props.gg === 'login') {
            return this.renderGoogleLogin();
        }
        else if (this.props.gg === 'signUp') {
            return this.renderGoogleSignUp();
        }
        return null;
    }

    renderGoogleLogin = () => {
        return (<GoogleLogin
            clientId="109833313133-4a0n37tuar06c0hstt23tvbj7d7flsiu.apps.googleusercontent.com"
            render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btnGg btn-form"><i className="fa fa-google"></i></button>
            )}
            onSuccess={this.responseGoogleLogin}
            onFailure={this.responseGoogleLogin}
            cookiePolicy={'single_host_origin'}
        />)
    }

    renderGoogleSignUp = () => {
        return (<GoogleLogin
            clientId="109833313133-4a0n37tuar06c0hstt23tvbj7d7flsiu.apps.googleusercontent.com"
            render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btnGg btn-form"><i className="fa fa-google"></i></button>
            )}
            onSuccess={this.responseGoogleSignUp}
            onFailure={this.responseGoogleSignUp}
            cookiePolicy={'single_host_origin'}
        />)
    }

    responseGoogleLogin = (response) => {
        const { profileObj } = response;
        if (response.tokenId) {
            const loginObj = {
                taiKhoan: profileObj.email,
                matKhau: profileObj.email,
            }
            this.props.login(loginObj,profileObj.imageUrl);
        }
    }

    responseGoogleSignUp = (response) => {
        const { profileObj } = response;
        if (response.tokenId) {
            const signUpObj = {
                taiKhoan: profileObj.email,
                matKhau: profileObj.email,
                hoTen: profileObj.name,
                soDT: '',
                maLoaiNguoiDung: 'HV',
                maNhom: GP,
                email: profileObj.email
            }
            this.props.signUp(signUpObj);
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (user,avt) => {
            dispatch(loginAction(user,avt));
        },
        signUp: (user) => {
            dispatch(signUpAction(user));
        }
    }
}
export default connect(null, mapDispatchToProps)(Google);