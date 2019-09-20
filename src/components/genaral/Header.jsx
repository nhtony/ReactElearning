import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sidebarAction } from '../../redux/actions/RightSidebar.action';
import { userLogoutAction } from '../../redux/actions/User.action';
import { getLocalStorage, loginInfo } from '../../common/Config';
import { getCategoriesAction } from '../../redux/actions/Courses.action'
import Categories from './Categories';
import { Link } from 'react-router-dom';
import MyHeaderCourse from './MyHeaderCourse';

const loginSidebar = {
  isOpenLogin: true,
  isOpenSignUp: false,
}

const signUpSidebar = {
  isOpenLogin: false,
  isOpenSignUp: true,
}

class Header extends Component {

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
    const user = getLocalStorage(loginInfo);
    const avatar = (user) ? user.avatar : '';
    return (avatar) ?
      <div className="d-flex align-items-center">
        <p onMouseEnter={() => this.hoverOn("courseDropdownMenu")} className="mb-0 mr-5 mycourse">My Courses<i className="ml-2 fa fa-angle-down"></i></p>
        <img onMouseEnter={() => this.hoverOn("avtDropdownMenu")} src={user.avatar} alt="" />
      </div> :
      <div className="d-flex align-items-center">
        <p onMouseEnter={() => this.hoverOn("courseDropdownMenu")} className="mycourse mb-0 mr-5">My courses<i className="ml-2 fa fa-angle-down"></i></p>
        <h6 onMouseEnter={() => this.hoverOn("avtDropdownMenu")} className="text-white mb-0">{user.hoTen}</h6>
      </div>
  }


  renderLoginHeader = () => {
    return (
      <li className="nav-item avatar">
        {this.renderAvatar()}
        <ul id="avtDropdownMenu" onMouseEnter={() => this.hoverOn("avtDropdownMenu")} onMouseLeave={() => this.hoverOff("avtDropdownMenu")} className="dropdown-menu">
          <li className="dropdown-header text-center"><strong>Account</strong></li>
          <li className="dropdown-item">
            <Link className="link-item" to={`/home/my/profile/notification/${getLocalStorage(loginInfo).taiKhoan}`}><i className="fa fa-bell-o" /><span className="mr-4">Notification</span><span className="badge badge-info text-white">42</span>
            </Link>
          </li>
          <li className="dropdown-item">
            <Link className="link-item" to={`/home/my/courses/${getLocalStorage(loginInfo).taiKhoan}`}><i className="fa fa-book mr-2"></i><span>My courses</span>
            </Link>
          </li>
          <li className="dropdown-header text-center"><strong>Setting</strong></li>
          <li className="dropdown-item">
            <Link className="link-item" to={`/home/my/profile/${getLocalStorage(loginInfo).taiKhoan}`}><i className="fa fa-user  mr-2" /><span>Profile</span>
            </Link>
          </li>
          <li className="dropdown-item" onClick={() => this.logout()}>
            <Link className="link-item" to='/home'>
              <i className="fa fa-lock  mr-2" /><span>Log-out</span>
            </Link>
          </li>
        </ul>
        <ul id="courseDropdownMenu" onMouseEnter={() => this.hoverOn("courseDropdownMenu")} onMouseLeave={() => this.hoverOff("courseDropdownMenu")} className="dropdown-menu">
          <MyHeaderCourse></MyHeaderCourse>
          <li id="see-all"><Link to={`/home/my/courses/${getLocalStorage(loginInfo).taiKhoan}`}>See all
          </Link>
          </li>
        </ul>
      </li>)
  }

  renderSignLogButton = () => {
    return (<li id="login-item" className="nav-item">
      <button id="btn-login" onClick={() => this.props.openLoginSidebar(loginSidebar)} className="my-2 my-sm-0 m-4">Login</button>
      <button id="btn-sign-up" onClick={() => this.props.openSignUpSidebar(signUpSidebar)}>Sign Up</button>
    </li>)
  }

  logout = () => {
    this.props.userLogOut();
  }

  checkLoginRender = () => {
    if (this.props.isLogin) {
      return this.renderLoginHeader();
    }
    else {
      return this.renderSignLogButton();
    }
  }

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    window.onscroll = () => this.scrollFunction();
    return (
      <header id="header" className="myHeader">
        <nav className="navbar navbar-expand-sm">
          <Link to="/home" className="navbar-brand"><img style={{ maxWidth: 50 }} src="/img/logo.png" alt="logo" /></Link>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav menu-nav col-6">
              <li className="nav-item active">
                <div className="dropdown">
                  <h6 id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categories<i className="fa fa-angle-down ml-2"></i>
                  </h6>
                  <Categories></Categories>
                </div>
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
    myCourses: state.CourseReducer.list,
    courses: state.CoursesReducer.Courses
  }
}

const mapDispatchToProps = (dispatch) => {
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
    getCategories: () => {
      dispatch(getCategoriesAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);


