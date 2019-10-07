import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUpAction } from '../../redux/actions/User.action';
import Facebook from './Facebook';
import Google from './Google';
import { GP } from '../../common/Config';
import { sidebarAction, openAfterAction } from '../../redux/actions/RightSidebar.action';

const emailRe = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const phoneRe = /[0-9]/;

const emailRegex = RegExp(emailRe);

const phoneRegex = RegExp(phoneRe);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};
class SidebarSignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: 'HV',
            maNhom: GP,
            email: '',
            formErrors: {
                taiKhoan: '',
                matKhau: '',
                hoTen: '',
                soDT: '',
                email: ''
            }
        }
    }

    loginSidebar = {
        isOpenLogin: true,
        isOpenSignUp: false,
    }

    handleOnChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        switch (name) {
            case "taiKhoan":
                formErrors.taiKhoan =
                    value.length < 1 ? "Vui lòng nhập tài khoản" : "";
                break;
            case "matKhau":
                formErrors.matKhau =
                    value.length < 6 ? "Mật khẩu tối thiểu 6 ký tự" : "";
                break;
            case "hoTen":
                formErrors.hoTen =
                    value.length < 1 ? "Vui lòng nhập họ tên" : "";
                break;
            case "soDT":
                formErrors.soDT = phoneRegex.test(value) ? "" : "Không đúng định dạng";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "Không đúng định dạng";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        if (formValid(this.state)) {
            const objUser = { ...this.state }
            delete objUser.formErrors;
            this.props.signUp(objUser);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }
    renderSidebar = () => {
        let style = (this.props.Sidebar.isOpenSignUp) ? { width: '380px' } : { width: '0' }
        let payload = (this.props.Sidebar.isOpenSignUp) ? "signUp" : "";
        const { formErrors } = this.state;
        return (<div id="signupSidebar" style={style} className="right-sidebar mostly-customized-scrollbar">
            <h4 className="text-center text-white mb-5">Đăng Ký</h4>
            <div className="container">
                <div className="row btn-part mb-5">
                    <div className="col-6">
                        <Facebook fb={payload}></Facebook>
                    </div>
                    <div className="col-6">
                        <Google gg={payload}></Google>
                    </div>
                </div>
                <form className="input-part" onSubmit={this.handleOnSubmit}>
                    <input style={{ marginBottom: formErrors.taiKhoan.length > 0 ? 0 : '20px' }} className="input-form" type="text" placeholder="Tài khoản" name="taiKhoan" value={this.state.taiKhoan} onChange={this.handleOnChange} />
                    {formErrors.taiKhoan.length > 0 && (
                        <span className="errorMessage">{formErrors.taiKhoan}</span>
                    )}
                    <input style={{ marginBottom: formErrors.matKhau.length > 0 ? 0 : '20px' }} className="input-form" type="password" placeholder="Mật khẩu" name="matKhau" value={this.state.matKhau} onChange={this.handleOnChange} />
                    {formErrors.matKhau.length > 0 && (
                        <span className="errorMessage">{formErrors.matKhau}</span>
                    )}
                    <input style={{ marginBottom: formErrors.hoTen.length > 0 ? 0 : '20px' }} className="input-form" type="text" placeholder="Họ và tên" name="hoTen" value={this.state.hoTen} onChange={this.handleOnChange} />
                    {formErrors.hoTen.length > 0 && (
                        <span className="errorMessage">{formErrors.hoTen}</span>
                    )}
                    <input style={{ marginBottom: formErrors.soDT.length > 0 ? 0 : '20px' }} className="input-form" type="tel" placeholder="Số điện thoại" name="soDT" value={this.state.soDT} onChange={this.handleOnChange} />
                    {formErrors.soDT.length > 0 && (
                        <span className="errorMessage">{formErrors.soDT}</span>
                    )}
                    <input style={{ marginBottom: formErrors.email.length > 0 ? 0 : '20px' }} className="input-form" type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleOnChange} />
                    {formErrors.email.length > 0 && (
                        <span className="errorMessage">{formErrors.email}</span>
                    )}
                    <div className="action-part mt-3">
                        <button className="btn-form btnLogin">Đăng Ký</button>
                    </div>

                </form>
                <div className="notes-part mt-3">
                    <p onClick={() => { this.props.openSignUpSidebar(this.loginSidebar) }}>Bạn đã có tài khoản?</p>
                </div>
            </div>
        </div >)
    }

    componentDidUpdate() {
        if (this.props.signUpSuccess) {
            this.props.openAfterSignUp();
        }
    }

    render() {
        return (!this.props.isLogin) ? this.renderSidebar() : null;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (user) => {
            dispatch(signUpAction(user));
        },
        openSignUpSidebar: (data) => {
            dispatch(sidebarAction(data))
        },
        openAfterSignUp: () => {
            dispatch(openAfterAction())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        Sidebar: state.RightSideBarReducer,
        isLogin: state.UserReducer.isLogin,
        signUpSuccess: state.UserReducer.isSuccess
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarSignUp);