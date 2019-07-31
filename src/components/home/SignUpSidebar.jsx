import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUpAction } from '../../redux/actions/User.action';

class SignUpSidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: 'HV',
            maNhom: 'GP01',
            email: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        return (
            <div id="signupSidebar" className="right-sidebar mostly-customized-scrollbar">
                <h4 className="text-center text-white mb-5">Sign up</h4>
                <div className="container">
                    <div className="row btn-part mb-5">
                        <div className="col-6">
                            <button className="btnFb btn-form"><i className="fa fa-facebook"></i></button>
                        </div>
                        <div className="col-6">
                            <button className="btnGg btn-form"><i className="fa fa-google"></i></button>
                        </div>
                    </div>
                    <form className="input-part" onSubmit={this.handleOnSubmit}>
                        <input className="input-form" type="text" placeholder="Username" name="taiKhoan" onChange={this.handleOnChange} />

                        <input className="input-form" type="password" placeholder="Password" name="matKhau" onChange={this.handleOnChange} />

                        <input className="input-form" type="text" placeholder="Fullname" name="hoTen" onChange={this.handleOnChange} />

                        <input className="input-form" type="tel" placeholder="Phone number" name="soDT" onChange={this.handleOnChange} />

                        <input className="input-form" type="email" placeholder="Email" name="email" onChange={this.handleOnChange} />

                        <div className="action-part mt-3">
                            <button className="btn-form btnLogin">Sign up</button>
                        </div>
                    </form>
                    <div className="notes-part mt-3">
                        <p>Already have a account?</p>
                    </div>
                </div>
            </div >

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (user) => {
            dispatch(signUpAction(user));
        }
    }
}

export default connect(null, mapDispatchToProps)(SignUpSidebar);