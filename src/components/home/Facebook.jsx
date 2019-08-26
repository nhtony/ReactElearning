import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { connect } from 'react-redux';
import { loginAction, signUpAction } from '../../redux/actions/User.action';
import { GP } from '../../common/Config';

class Facebook extends Component {

    state = {
        isLoggedIn: false,
        username: '',
        userID: '',
        name: '',
        email: '',
        picture: '',
    }

    renderLoginFaceBook = () => {
        return (<FacebookLogin
            appId="365944774343563"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebookLogin} render={renderProps => (
                <button onClick={renderProps.onClick} className="btnFb btn-form"><i className="fa fa-facebook"></i></button>
            )} />)
    }

    renderSignUpFaceBook = () => {
        return (<FacebookLogin
            appId="365944774343563"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebookSignUp} render={renderProps => (
                <button onClick={renderProps.onClick} className="btnFb btn-form"><i className="fa fa-facebook"></i></button>
            )} />)
    }

    render() {
        if (this.props.fb === 'login') {
            return this.renderLoginFaceBook();
        }
        else if (this.props.fb === 'signUp') {
            return this.renderSignUpFaceBook();
        }
        return null;
    }


    responseFacebookLogin = (response) => {
        if (response.accessToken) {
            let loginObj = {
                taiKhoan: response.userID,
                matKhau: response.userID,
            }
            this.props.login(loginObj,response.picture.data.url);
        }
    }

    responseFacebookSignUp = (response) => {
        if (response.accessToken) {
            let signUpObj = {
                taiKhoan: response.userID,
                matKhau: response.userID,
                hoTen: response.name,
                soDT: '',
                maLoaiNguoiDung: 'HV',
                maNhom: GP,
                email: response.email
            }

            if (!response.email) {
                signUpObj.email = response.userID + "@gmail.com";
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
export default connect(null, mapDispatchToProps)(Facebook);

