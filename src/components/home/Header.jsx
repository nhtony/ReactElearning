import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  isOpenLogin = false;
  isOpenSignUp = false;

  scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("header").classList.add("bgColor");

    } else {
      document.getElementById("header").classList.remove("bgColor");
    }
  }

  openSidebar = (signup) => {
    signup ? document.getElementById("signupSidebar").style.width = "380px" : document.getElementById("loginSidebar").style.width = "380px";
  }

  closeSidebar = (signup) => {
    signup ? document.getElementById("signupSidebar").style.width = "0" : document.getElementById("loginSidebar").style.width = "0";
  }

  openSignUpSidebar = (signup) => {
    this.isOpenSignUp = !this.isOpenSignUp;
    if (this.isOpenSignUp) {
      this.isOpenLogin = false;
      this.openSidebar(signup); // Mở signUP
      this.closeSidebar(this.isOpenLogin); // Không mở login
    }
    else {
      this.closeSidebar(signup); // dong signup
    }
  }

  openLoginSidebar = (login) => {
    this.isOpenLogin = !this.isOpenLogin;
    if (this.isOpenLogin) {
      this.isOpenSignUp = false;
      this.openSidebar(login); // Mở login
      this.closeSidebar(!this.isOpenSignUp); // Không mở signUp
    }
    else {
      this.closeSidebar(login); // Dong login
    }
  }

  renderSignLogButton = () => {
    return (<li id="login-item" className="nav-item">
      <button onClick={() => this.openLoginSidebar(false)} className="btn btn-outline-success my-2 my-sm-0 m-4">Login</button>
      <button onClick={() => this.openSignUpSidebar(true)} className="btn btn-primary">Sign Up</button>
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
    isLogin: state.UserReducerStore.isLogin
  }
}



export default connect(mapStateToProps, null)(Header);


