import React, { Component } from 'react'
import NotiItem from './NotiItem';
import { getLocalStorage, userLogin } from '../../common/Config';



export default class Notification extends Component {


    shouldComponentUpdate(nextProps) {
        if (nextProps.location.pathname === this.props.match.url) {
            return false
        }
        else {
            return true
        }
    }

    render() {
        const { taiKhoan } = getLocalStorage(userLogin);
        const { notification } = getLocalStorage(taiKhoan);
        return (<div className="notifiaction">
            {notification.length > 0 ? notification.map((item, index) => {
                return <NotiItem key={index} notification={item}></NotiItem>
            }) : <p>Không có thông báo nào.</p>}
        </div>)
    }

}

