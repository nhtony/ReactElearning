import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Sidebar extends Component {
    render() {
        return (
            <div id="side-bar">
                <div className="logo">ADMIN PAGE</div>
                <ul className="list-group rounded-0">
                    <li className="dashboard">DASHBOARD</li>
                    <li>
                        <Link to= "/admin/users">
                            <i className="fa fa-user mr-2" /> Quản lý thành viên
                    </Link>
                    </li>
                    <li>
                        <Link to= "/admin/courses">
                            <i className="fa fa-book mr-2" /> Quản lý khóa học
                    </Link>
                    </li>
                    <li>
                        <a href=" ">
                            <i className="fa fa-cogs mr-2" /> Cấu hình hệ thống
                     </a>
                    </li>
                    <li>
                        <a href=" ">
                            <i className="fa fa-slack mr-2" /> Thông tin khác
                    </a>
                    </li>
                </ul>
            </div>

        )
    }
}
