import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editUserAction } from '../../redux/actions/Users.action';
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

let obj = {};

class AccountMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPass: '',
            newPass: '',
            retypePass: '',
            formErrors: {
                currentPass: "",
                newPass: '',
                retypePass: '',
                confirmPassword: '',
            },

        }
    }



    handleOnchange = (e) => {
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "currentPass":
                formErrors.currentPass =
                    value.length < 1 ? "Must be filled" : "";
                break;
            case "newPass":
                formErrors.newPass = value.length < 1 ? "Must be filled" : "";
                break;
            case "retypePass":
                formErrors.retypePass = value.length < 1 ? "Must be filled" : "";
                formErrors.confirmPassword = (value !== this.state.newPass) ? "Passwords don't match" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (formValid(this.state)) {
            const editObj = { ...obj, matKhau: this.state.retypePass };
            if (this.props.userProfile.matKhau === this.state.currentPass) {
                this.props.editUser(editObj);
                document.getElementById("create-course-form").reset();
            }
            else {
                alert('errr')
            }
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }

  
    componentWillReceiveProps = (nextProp) => {
        this.setState(nextProp.userProfile);
    }

    render() {
        const { taiKhoan } = this.props.userProfile;
        const { formErrors } = this.state;
        obj = { ...this.props.userProfile };
        delete obj.matKhau;
        return (
            <>
                <div className="account-title">
                    <h3>Tài khoản</h3>
                    <p>Cài đặt và thay đổi mật khẩu tại đây.</p>
                </div>
                <div className="account-info">
                    Tài khoản:
                <div className="form-control">
                        Tài của của bạn
                    <b className="ml-1">{taiKhoan}</b>
                    </div>
                </div>
                <div className="account-content">
                    <form id="create-course-form" className="my-form" onSubmit={this.handleOnSubmit}>
                        <div className="my-input">
                            Mật khẩu:
                         <input type="password" placeholder="Mật khẩu hiện tại" name="currentPass" onChange={this.handleOnchange} />
                        </div>
                        {formErrors.currentPass.length > 0 && (
                            <span className="errorMessage">{formErrors.currentPass}</span>
                        )}
                        <div className="my-input">
                            <input type="password" placeholder="Nhập mật khẩu mới" name="newPass" onChange={this.handleOnchange} />
                        </div>
                        {formErrors.newPass.length > 0 && (
                            <span className="errorMessage">{formErrors.newPass}</span>
                        )}
                        <div className="my-input">
                            <input type="password" placeholder="Nhập lại mật khẩu" name="retypePass" onChange={this.handleOnchange} />
                        </div>
                        {formErrors.confirmPassword.length > 0 && (
                            <span className="errorMessage">{formErrors.confirmPassword}</span>
                        )}
                        <div className="profile-button">
                            <button className="save-button">Lưu</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userProfile: state.UserReducer.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (useredit) => {
            dispatch(editUserAction(useredit))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountMain);