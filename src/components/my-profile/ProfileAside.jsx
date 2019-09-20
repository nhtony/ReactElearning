import React from 'react'
import { Link } from 'react-router-dom';
import { getLocalStorage, loginInfo } from '../../common/Config';
export default function ProfileAside() {
    const { avatar, hoTen } = getLocalStorage(loginInfo);
    return (
        <aside className="my-profile-aside">
            <div className="my-info avatar">
                <img src={avatar} alt="" />
                <h6>{hoTen}</h6>
            </div>
            <ul className="my-menu-profile">
                <li><Link to={`/home/my/profile/${getLocalStorage(loginInfo).taiKhoan}`}>Profile</Link></li>
                <li><Link to={`/home/my/profile/account/${getLocalStorage(loginInfo).taiKhoan}`}>Account</Link></li>
                <li><Link to={`/home/my/profile/notification/${getLocalStorage(loginInfo).taiKhoan}`}>Nofication</Link></li>
                <li><a href={`/home/my/courses/${getLocalStorage(loginInfo).taiKhoan}`}>My courses</a></li>
            </ul>
        </aside>
    )
}
