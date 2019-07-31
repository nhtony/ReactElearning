import React, { Component } from 'react'

export default class User extends Component {
    render() {
        let { email, hoTen, taiKhoan, soDt } = this.props.user;
        return (
            <tr>
                <th>{taiKhoan}</th>
                <td>{hoTen}</td>
                <td>{email}</td>
                <td>{soDt}</td>
            </tr>
        )
    }
}
