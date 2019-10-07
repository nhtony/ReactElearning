import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editUserAction } from '../../redux/actions/Users.action';
import { getProfileAction } from '../../redux/actions/User.action';
import { getLocalStorage, userLogin } from '../../common/Config';

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

const obj = {
    taiKhoan: "",
    matKhau: ""
}

class ProfileMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hoTen: '',
            soDT: '',
            email: '',
            formErrors: {
                hoTen: "",
                soDT: "",
                email: "",
            }
        }
    }

    handleOnchange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        switch (name) {
            case "hoTen":
                formErrors.hoTen =
                    value.length < 1 ? "Name is require" : "";
                break;
            case "soDT":
                formErrors.soDT = phoneRegex.test(value) ? "" : "invalid phone";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        if (formValid(this.state)) {
            const userEdit = {
                ...obj, hoTen: this.state.hoTen,
                soDT: this.state.soDT,
                email: this.state.email,
                maLoaiNguoiDung: 'HV',
                maNhom: 'GP09',
            }
            this.props.editUser(userEdit);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }

    componentWillReceiveProps = (nextProp) => {
        this.setState(nextProp.userProfile);
    }

    componentDidMount() {
        this.props.getProfile(this.props.tk, getLocalStorage(userLogin).accessToken);
    }

    render() {
        const { formErrors } = this.state;
        obj.taiKhoan = this.props.userProfile.taiKhoan;
        obj.matKhau = this.props.userProfile.matKhau;
        return (
            <>
                <div className="profile-title">
                    <h3>Thông tin cá nhân</h3>
                    <p>Thêm một số thông tin về bạn</p>
                </div>
                <div className="profile-content">
                    <form className="my-form" onSubmit={this.handleOnSubmit}>
                        <div className="name my-input">
                            Tên:
                            <input type="text" name="hoTen" value={this.state.hoTen} onChange={this.handleOnchange} noValidate />
                        </div>
                        {formErrors.hoTen.length > 0 && (
                            <span className="errorMessage">{formErrors.hoTen}</span>
                        )}
                        <div className='invalid-feedback'>{this.state.hoTen}</div>
                        <div className="email my-input">
                            Email:
                            <input type="email" name="email" value={this.state.email} onChange={this.handleOnchange} noValidate />
                        </div>
                        {formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                        )}
                        <div className="phone-num my-input">
                            Số điện thoại:
                            <input type="text" name="soDT" value={this.state.soDT} onChange={this.handleOnchange} noValidate />
                        </div>
                        {formErrors.soDT.length > 0 && (
                            <span className="errorMessage">{formErrors.soDT}</span>
                        )}
                        <div className="profile-button">
                            <button type="submit" className="save-button">Lưu</button>
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
        },
        getProfile: (username, token) => {
            dispatch(getProfileAction(username, token));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileMain);