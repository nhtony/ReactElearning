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
        const { taiKhoan } = getLocalStorage(userLogin)
        const notificontent = getLocalStorage(taiKhoan);
        return (<div className="notifiaction">
            { notificontent.length > 0 ? notificontent.map((item, index) => {
                return <NotiItem key={index} course={item}></NotiItem>
            }) : <p>Không có thông báo nào.</p>}
        </div>)
    }

}

