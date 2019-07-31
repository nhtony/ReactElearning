import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sidebarAction } from '../../redux/actions/RightSidebar.action';
class Header extends Component {

  loginSidebar = {
    isOpenLogin: true,
    isOpenSignUp: false,
  }

  signUpSidebar = {
    isOpenLogin: false,
    isOpenSignUp: true,
  }

  scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("header").classList.add("bgColor");

    } else {
      document.getElementById("header").classList.remove("bgColor");
    }
  }

  renderSignLogButton = () => {
    return (<li id="login-item" className="nav-item">
      <button onClick={() => this.props.openLoginSidebar(this.loginSidebar)} className="btn btn-outline-success my-2 my-sm-0 m-4">Login</button>
      <button onClick={() => this.props.openSignUpSidebar(this.signUpSidebar)} className="btn btn-primary">Sign Up</button>
    </li>)
  }

  renderLoginAvatar = () => {
    return (<li id="avatar" className="nav-item avatar">
      <img src="./img/avatar.png" alt="" />
    </li>);
  }

  checkLoginRender = () => {
    if (this.props.isLogin) {
      return this.renderLoginAvatar();
    }
    else {
      return this.renderSignLogButton();
    }
  }


  render() {
    window.onscroll = () => this.scrollFunction();
    return (
      <header id="header" className="myHeader">
        <nav className="navbar navbar-expand-sm">
          <a className="navbar-brand" href="home"><img style={{ maxWidth: 50 }} src="./img/logo.png" alt="logo" /></a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav menu-nav col-6">
              <li className="nav-item active">
                <a className="nav-link" href="home">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home">Link</a>
              </li>
            </ul>
            <ul className="action-nav navbar-nav col-6">
              {this.checkLoginRender()}
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.UserReducerStore.isLogin,
  }
}

const DispatchToProps = (dispatch) => {
  return {
    openLoginSidebar: (data) => {
      dispatch(sidebarAction(data))
    },
    openSignUpSidebar: (data) => {
      dispatch(sidebarAction(data))
    }
  }
}
export default connect(mapStateToProps, DispatchToProps)(Header);


