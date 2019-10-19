import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import Icon from '@material-ui/core/Icon';
import { getLocalStorage, userLogin } from '../../common/Config';

const { taiKhoan } = getLocalStorage(userLogin);

const { require, notification } = localStorage.getItem(taiKhoan) ? getLocalStorage(taiKhoan) : { require: [], notification: [] };

export default class Sidebar extends Component {



    render() {
        return (
            <div id="side-bar">
                <div className="logo">ADMIN PAGE</div>
                <ul className="list-group rounded-0">
                    <li className="dashboard">DASHBOARD</li>
                    <li>
                        <NavLink to="/admin/users">
                            <i className="fa fa-user mr-2" /> Quản lý thành viên
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/courses">
                            <i className="fa fa-book mr-2" /> Quản lý khóa học
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/notification" className="d-flex align-items-center">
                            <i className="fa fa-slack mr-2" /> Thông báo {(require.length > 0 || notification.length > 0) && <Icon className="ml-3" color="error">notification_important</Icon>}
                        </NavLink>
                    </li>
                    <li>
                        <a href=" ">
                            <i className="fa fa-cogs mr-2" /> Cấu hình hệ thống
                        </a>
                    </li>
                </ul>
            </div>

        )
    }
}

