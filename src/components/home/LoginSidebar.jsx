import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginAction } from '../../redux/actions/User.action';


class LoginSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',

        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state);
    }

    renderSidebar = () => {
        let style = (this.props.Sidebar.isOpenLogin) ? { width: '380px' } : { width: '0' };
        return (<div id="loginSidebar" style={style} className="right-sidebar mostly-customized-scrollbar">
            <h4 className="text-center text-white mb-5">Login</h4>
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
                    <div className="action-part mt-5">
                        <button className="btn-form btnLogin">Login</button>
                    </div>
                </form>
                <div className="notes-part mt-5">
                    <p>Forgot password</p>
                    <p>Create a new acount</p>
                </div>
            </div>
        </div >);
    }
    render() {
        return (!this.props.isLogin) ? this.renderSidebar() : null;
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(loginAction(user));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        Sidebar: state.RighSideBarStore,
        isLogin: state.UserReducerStore.isLogin,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginSidebar);