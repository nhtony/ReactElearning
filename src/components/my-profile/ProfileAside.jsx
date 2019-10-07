import React from 'react'
import { NavLink } from 'react-router-dom';
import { getLocalStorage, userLogin } from '../../common/Config';
export default function ProfileAside() {
    const { avatar, hoTen } = getLocalStorage(userLogin);
    return (
        <aside className="my-profile-aside">
            <div className="my-info avatar">
                <img src={avatar} alt="" />
                <h6>{hoTen}</h6>
            </div>
            <ul className="my-menu-profile">
                <li><NavLink activeClassName="active-nav" to={`/home/my/profile/${getLocalStorage(userLogin).taiKhoan}`}>Thông tin cá nhân</NavLink></li>
                <li><NavLink activeClassName="active-nav" to={`/home/my/profile/account/${getLocalStorage(userLogin).taiKhoan}`}>Tài khoản</NavLink></li>
                <li><NavLink activeClassName="active-nav" to={`/home/my/profile/notification/${getLocalStorage(userLogin).taiKhoan}`}>Thông báo</NavLink></li>
                <li><a href={`/home/my/courses/${getLocalStorage(userLogin).taiKhoan}`}>Khóa học của tôi</a></li>
            </ul>
        </aside>
    )
}
