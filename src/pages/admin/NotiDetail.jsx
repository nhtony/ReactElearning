import React, { Component } from 'react'
import { getLocalStorage } from '../../common/Config'
import UserCard from './UserCard';

export default class NotiDetail extends Component {

    render() {
        const { require } = getLocalStorage(this.props.match.params.tk);
        let course = require.find(item => item.maKhoaHoc === this.props.match.params.mkh);
        return (
            <section className="noti-detail d-flex justify-content-center">
                <UserCard {...this.props} course={course}></UserCard>
            </section>
        )
    }
}
