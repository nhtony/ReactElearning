import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sidebarAction } from '../../redux/actions/RightSidebar.action';
import { userLogoutAction } from '../../redux/actions/User.action';
import { getLocalStorage, loginInfo } from '../../common/Config';
import { Redirect } from 'react-router-dom';

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
      if (this.props.isLogin) {
        document.getElementById("avtDropdownMenu").style.display = "none";
        document.getElementById("courseDropdownMenu").style.display = "none";
      }
    } else {
      document.getElementById("header").classList.remove("bgColor");
    }
  }

  hoverOn = (idMenu) => {
    document.getElementById(idMenu).style.display = "block";
    if (idMenu === "courseDropdownMenu") {
      document.getElementById("avtDropdownMenu").style.display = "none";
    }
    else if (idMenu === "avtDropdownMenu") {
      document.getElementById("courseDropdownMenu").style.display = "none";
    }
  }

  hoverOff = (idMenu) => {
    document.getElementById(idMenu).style.display = "none";
  }

  renderAvatar = () => {
    const avatar = getLocalStorage(loginInfo).avatar;
    return (avatar) ?
      <div className="d-flex align-items-center">
        <p onMouseEnter={() => this.hoverOn("courseDropdownMenu")} className="mb-0 mr-5 mycourse">My Courses<i className="ml-2 fa fa-angle-down"></i></p>
        <img onMouseEnter={() => this.hoverOn("avtDropdownMenu")} src={avatar} alt="" />
      </div> :
      <div className="d-flex align-items-center">
        <p onMouseEnter={() => this.hoverOn("courseDropdownMenu")} className="mycourse mb-0 mr-5">My courses<i className="ml-2 fa fa-angle-down"></i></p>
        <h6 onMouseEnter={() => this.hoverOn("avtDropdownMenu")} className="text-white mb-0">{getLocalStorage(loginInfo).hoTen}</h6>
      </div>
  }

  renderLoginHeader = () => {
    return (
      <li className="nav-item avatar">
        {this.renderAvatar()}
        <ul id="avtDropdownMenu" onMouseEnter={() => this.hoverOn("avtDropdownMenu")} onMouseLeave={() => this.hoverOff("avtDropdownMenu")} className="dropdown-menu">
          <li className="dropdown-header text-center"><strong>Account</strong></li>
          <li className="dropdown-item"><i className="fa fa-bell-o" /><span>Updates</span></li>
          <li className="dropdown-item"><i className="fa fa-envelope-o" /><span >Messages</span></li>
          <li className="dropdown-item"><i className="fa fa-comment-o" /><span >Comments</span></li>
          <li className="dropdown-header text-center"><strong>Setting</strong></li>
          <li className="dropdown-item"><i className="fa fa-user" /><span>Profile</span></li>
          <li className="dropdown-item"><i className="fa fa-wrench" /><span>Settings</span></li>
          <li className="dropdown-item"><i className="fa fa-shield" /><span>Log Account</span></li>
          <li className="dropdown-item" onClick={() => this.logout()}><i className="fa fa-lock" /><span>Log-out</span></li>
        </ul>
        <ul id="courseDropdownMenu" onMouseEnter={() => this.hoverOn("courseDropdownMenu")} onMouseLeave={() => this.hoverOff("courseDropdownMenu")} className="dropdown-menu">
          <li className="dropdown-item">Hello</li>
        </ul>
      </li>);
  }

  renderSignLogButton = () => {
    return (<li id="login-item" className="nav-item">
      <button onClick={() => this.props.openLoginSidebar(this.loginSidebar)} className="btn btn-outline-success my-2 my-sm-0 m-4">Login</button>
      <button onClick={() => this.props.openSignUpSidebar(this.signUpSidebar)} className="btn btn-primary">Sign Up</button>
    </li>)
  }

  logout() {
    this.props.userLogOut();
    return (<Redirect to="/home" />)
  }

  checkLoginRender = () => {
    if (this.props.isLogin) {
      return this.renderLoginHeader();
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
          <a className="navbar-brand" href="home"><img style={{ maxWidth: 50 }} src="../img/logo.png" alt="logo" /></a>
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
    isLogin: state.UserReducer.isLogin,
  }
}

const DispatchToProps = (dispatch) => {
  return {
    openLoginSidebar: (data) => {
      dispatch(sidebarAction(data))
    },
    openSignUpSidebar: (data) => {
      dispatch(sidebarAction(data))
    },
    userLogOut: () => {
      dispatch(userLogoutAction());
    },
  }
}
export default connect(mapStateToProps, DispatchToProps)(Header);


