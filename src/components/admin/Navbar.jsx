import React, { Component } from 'react'
import { connect } from 'react-redux';
import { adminLogoutAction } from '../../redux/actions/Admin.action';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light w-100">
                <a className="navbar-brand" href=" "><i className="fa fa-align-justify" /></a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href=" " id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cybersoft
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownId">
                                <button className="dropdown-item" >Thông tin cá nhân</button>
                                <a href="/home" onClick={() => this.props.logOut()} className="dropdown-item" >Thoát</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


const DispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(adminLogoutAction());
        }
    }
}
export default connect(null, DispatchToProps)(Navbar);