import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUpAction } from '../../redux/actions/User.action';
import Facebook from './Facebook';
import Google from './Google';
import { GP } from '../../common/Config';
import { sidebarAction, openAfterAction } from '../../redux/actions/RightSidebar.action';
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
            email: ''
        }
    }

    loginSidebar = {
        isOpenLogin: true,
        isOpenSignUp: false,
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.signUp(this.state);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: '',
            maNhom: '',
            email: ''
        })
    }

    renderSidebar = () => {
        let style = (this.props.Sidebar.isOpenSignUp) ? { width: '380px' } : { width: '0' }
        let payload = (this.props.Sidebar.isOpenSignUp) ? "signUp" : "";
        return (<div id="signupSidebar" style={style} className="right-sidebar mostly-customized-scrollbar">
            <h4 className="text-center text-white mb-5">Sign up</h4>
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
                    <input className="input-form" type="text" placeholder="Username" name="taiKhoan" value={this.state.taiKhoan} onChange={this.handleOnChange} />

                    <input className="input-form" type="password" placeholder="Password" name="matKhau" value={this.state.matKhau} onChange={this.handleOnChange} />

                    <input className="input-form" type="text" placeholder="Fullname" name="hoTen" value={this.state.hoTen} onChange={this.handleOnChange} />

                    <input className="input-form" type="tel" placeholder="Phone number" name="soDT" value={this.state.soDT} onChange={this.handleOnChange} />

                    <input className="input-form" type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleOnChange} />
                    <div className="action-part mt-3">
                        <button className="btn-form btnLogin">Sign up</button>
                    </div>

                </form>
                <div className="notes-part mt-3">
                    <p onClick={() => { this.props.openSignUpSidebar(this.loginSidebar) }}>Already have a account?</p>
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